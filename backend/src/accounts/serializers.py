from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password
from .models import Account
# ,Contact_number,Address

from contact_numbers.serializers import ContactSerializer
from addresses.serializers import AddressSerializer
from django.conf import settings
from django.core import serializers as core_serializers
from rest_framework import serializers
from dj_rest_auth.models import TokenModel
from dj_rest_auth.utils import import_callable
from dj_rest_auth.serializers import UserDetailsSerializer as DefaultUserDetailsSerializer
from activities_log.models import Log_Activity
from allauth.account.models import EmailAddress
from django.http import HttpResponse


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")

class AccountSerializer(serializers.ModelSerializer):
    address= AddressSerializer(read_only=True)
    user = UserSerializer(read_only=True)
    class Meta:
        model = Account
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


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