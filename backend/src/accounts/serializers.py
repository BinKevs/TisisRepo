from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True},
                        'password': {'read_only': True}}

# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','is_active','is_superuser','password','date_joined','first_name','last_name')
        extra_kwargs = {'password': {'write_only': True},
                        'password': {'read_only': True}}
        def create(self, validated_data):
            user = User.objects.create_user(
                self.validated_data['username'], first_name=self.validated_data['first_name'],last_name=self.validated_data['last_name'],email=self.validated_data['email'],password=self.validated_data['password'])
            return user

# Register Serializer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',"first_name","last_name", 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            self.validated_data['username'], first_name=self.validated_data['first_name'],last_name=self.validated_data['last_name'],email=self.validated_data['email'],password=self.validated_data['password'])
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
