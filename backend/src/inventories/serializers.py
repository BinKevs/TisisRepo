from rest_framework import serializers
from inventories.models import Inventory
from suppliers.serializers import SupplierSerializer
from products.serializers import ProductSerializer
# Lead Serializer


class InventorySerializer(serializers.ModelSerializer):
    supplier = SupplierSerializer(read_only=True)
    product = ProductSerializer(read_only=True)

    class Meta:
        model = Inventory
        fields = '__all__'
