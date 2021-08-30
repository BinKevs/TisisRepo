from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from .models import Account

from django.conf import settings
from django.core import serializers as core_serializers
from rest_framework import serializers
from dj_rest_auth.models import TokenModel
from dj_rest_auth.utils import import_callable
from dj_rest_auth.serializers import UserDetailsSerializer as DefaultUserDetailsSerializer
from activities_log.models import Log_Activity
from allauth.account.models import EmailAddress
from django.http import HttpResponse
# email_address_user = EmailAddress.objects.get(user_id=96)
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True},
                        'password': {'read_only': True}}

# User Serializer

class AccountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Account
        fields = '__all__'
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
        # fields = ('id', 'username', 'email','is_active','is_superuser','password','date_joined','first_name','last_name')
# Register Serializer

# class UserEmailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = EmailAddress
#         fields = '__all__'


class AccountSettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','is_superuser','is_active',"first_name","last_name", 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            self.validated_data['username'],email=self.validated_data['email'],is_superuser=self.validated_data['is_superuser'],is_active=self.validated_data['is_active'], first_name=self.validated_data['first_name'],last_name=self.validated_data['last_name'],password=self.validated_data['password'])
        return user
    def put(self, validated_data):
        user = User.objects.perform_update(
            self.validated_data['username'],email=self.validated_data['email'], is_superuser=self.validated_data['is_superuser'],is_active=self.validated_data['is_active'],first_name=self.validated_data['first_name'],last_name=self.validated_data['last_name'],password=self.validated_data['password'])
        return user


# Login Serializer


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")



# This is to allow you to override the UserDetailsSerializer at any time.
# If you're sure you won't, you can skip this and use DefaultUserDetailsSerializer directly
# rest_auth_serializers = getattr(settings, 'REST_AUTH_SERIALIZERS', {})
# UserDetailsSerializer = import_callable(
#     rest_auth_serializers.get('USER_DETAILS_SERIALIZER', DefaultUserDetailsSerializer)
# )

class CustomTokenSerializer(serializers.ModelSerializer):
    # user = UserDetailsSerializer(read_only=True)
    user = UserSerializer(many=False, read_only=True)  # this is add by myself.
    # email_info = serializers.SerializerMethodField()
    class Meta:
        model = TokenModel
        # fields = ('key','user', )
        fields = '__all__'
    # @staticmethod
    # def get_email_info(obj):
    #     email = Log_Activity.objects.filter(account=obj.user.id)
    #     return {
    #        core_serializers.serialize('json', email)
    #     }
      
        
        # return HttpResponse(data, content_type="application/json")