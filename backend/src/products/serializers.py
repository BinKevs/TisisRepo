from rest_framework import serializers
from products.models import Product
from suppliers.serializers import SupplierSerializer
# Lead Serializer


class ProductSerializer(serializers.ModelSerializer):
    supplier = SupplierSerializer(read_only=True)

    class Meta:
        model = Product
        fields = '__all__'
