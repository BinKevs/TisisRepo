from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Log_Activity

class Log_ActivitySerializer(serializers.ModelSerializer):
    account = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all())
    user_info = serializers.SerializerMethodField()
    class Meta:
        model = Log_Activity
        fields = "__all__"
    @ staticmethod
    def get_user_info(obj):
        user = User.objects.get(pk=obj.account.id)
        try:
            return {
                "id": user.id,
                "username": user.username,
                "name": user.last_name + " " + user.first_name,
            }
        except:
            return {
                "id": user.id,
                "username": user.username,
                "name": None,
            }