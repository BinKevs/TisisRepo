from rest_framework import serializers
from transactions.models import Transaction
from django.contrib.auth.models import User


class TransactionSerializer(serializers.ModelSerializer):
    creator = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all())
    creator_info = serializers.SerializerMethodField()
    class Meta:
        model = Transaction
        fields = '__all__'
    
    @ staticmethod
    def get_creator_info(obj):
       
        try:
            user = User.objects.get(pk=obj.creator.id)
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
    