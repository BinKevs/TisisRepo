from rest_framework import serializers
from transaction_items.models import Transaction_item
from transactions.serializers import TransactionSerializer
from products.serializers import ProductSerializer
# Lead Serializer


class InventorySerializer(serializers.ModelSerializer):
    transaction = TransactionSerializer(read_only=True)
    product = ProductSerializer(read_only=True)

    class Meta:
        model = Transaction_item
        fields = '__all__'
