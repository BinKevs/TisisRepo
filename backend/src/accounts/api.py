from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, LoginSerializer
from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import AccountSerializer
from rest_framework import filters
from .models import Account
from rest_framework.decorators import api_view, parser_classes
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
# API
# class AccountViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     ordering_fields = ['id'] 
#     filter_backends = [filters.OrderingFilter]
class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    parser_classes = (MultiPartParser,FormParser)


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



@api_view(["GET"])
def LoadAccountUser(request):
    return Response(AccountSerializer(Account.objects.get(user=request.user.id)).data,status=status.HTTP_201_CREATED)

@api_view(['PUT'])
def EditAccountUser(request, pk):
    user = User.objects.get(pk=pk)
    data = request.data
    user.first_name = data.get("first_name",user.first_name)
    user.last_name = data.get("last_name",user.last_name)
    user.username = data.get("username",user.username)
    user.email = data.get("email",user.email)
    user.save()
    return Response(AccountSerializer(Account.objects.get(user=pk)).data,status=status.HTTP_201_CREATED)