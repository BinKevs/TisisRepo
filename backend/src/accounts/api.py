from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, AccountSettingSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import AccountSerializer
from rest_framework import filters
from .models import Account
# API


class AccountViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
# Register API


class AccountSettingAPI(generics.GenericAPIView):
    serializer_class = AccountSettingSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(AccountSettingSerializer(user, context=self.get_serializer_context()).data)
    def put(self, request,pk, *args, **kwargs):
        UserToUpdate = User.objects.get(id=pk)
        serializer = self.get_serializer(UserToUpdate,data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response(AccountSettingSerializer(user, context=self.get_serializer_context()).data)
# Login API


class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
    
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })



# class LogoutAPI(generics.GenericAPIView):
#     def post(self, request, *args, **kwargs):
#         request.user.AuthToken.objects.delete()
#         return Response(status=status.HTTP_200_OK)


# Get User API


class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        # print(AccountSerializer(Account.objects.get(user=self.request.user)).data)
        return self.request.user


