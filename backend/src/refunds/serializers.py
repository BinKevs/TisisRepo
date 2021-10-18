from rest_framework import serializers
from .models import Refund
from transaction_items.serializers import Transaction_itemSerializer
from django.contrib.auth.models import User

class RefundSerializer(serializers.ModelSerializer):
    transaction_item = Transaction_itemSerializer()
    user_info = serializers.SerializerMethodField()
    class Meta:
        model = Refund
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
class RefundSerializerCreate(serializers.ModelSerializer):
    
    class Meta:
        model = Refund
        fields = '__all__'
   