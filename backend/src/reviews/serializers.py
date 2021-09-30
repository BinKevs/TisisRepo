from rest_framework import serializers
from .models import Review
from accounts.serializers import UserSerializer
from django.contrib.auth.models import User
class ReviewSerializer(serializers.ModelSerializer):
    # user = UserSerializer(read_only=True)
    user_info = serializers.SerializerMethodField()
    class Meta:
        model = Review
        fields = '__all__'
    @ staticmethod
    def get_user_info(obj):
        try:
            user = User.objects.get(pk=obj.user.id)
            return {
                "id": user.id,
                "username": user.username,
                "name": user.last_name + " " + user.first_name,
            }
        except:
            return {
                "id": None,
                "username": None,
                "name": None,
            }