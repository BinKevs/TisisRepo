from rest_framework import serializers
from transactions.models import Transaction
from django.contrib.auth.models import User
from transaction_items.serializers import Transaction_itemSerializer
class TransactionSerializer(serializers.ModelSerializer):
    # creator = serializers.PrimaryKeyRelatedField(
    #     queryset=User.objects.all())
    items = Transaction_itemSerializer(many=True,read_only=True)
    user_info = serializers.SerializerMethodField()
    
    class Meta:
        model = Transaction
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

# class OnlineTransactionSerializer(serializers.ModelSerializer):
    # transaction = serializers.PrimaryKeyRelatedField(
    #     queryset=User.objects.all())
    # transaction_info = serializers.SerializerMethodField()
    # transaction = TransactionSerializer(read_only=True)
    # class Meta:
    #     model = OnlineTransaction
    #     fields = '__all__'
        # extra_kwargs = {
        #     "transaction": {
        #         "required": False,
        #     }
        # }
    
    # @ staticmethod
    # def get_transaction_info(obj):
       
    #     try:
    #         user = User.objects.get(pk=obj.creator.id)
    #         return {
    #             "id": user.id,
    #             "username": user.username,
    #             "name": user.last_name + " " + user.first_name,
    #         }
    #     except:
    #         return {
    #             "id": None,
    #             "username": None,
    #             "name": None,
    #         }
    