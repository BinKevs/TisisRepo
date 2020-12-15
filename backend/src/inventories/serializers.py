from rest_framework import serializers
from inventories.models import Inventory
from suppliers.serializers import SupplierSerializer
from products.serializers import ProductSerializer
from products.models import Product
from suppliers.models import Supplier


class InventorySerializer(serializers.ModelSerializer):
    supplier = serializers.PrimaryKeyRelatedField(
        queryset=Supplier.objects.all())
    # supplier = SupplierSerializer(read_only=True)
    # product = ProductSerializer(read_only=True)
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all())
    product = serializers.SerializerMethodField()

    class Meta:
        model = Inventory
        fields = '__all__'

    @staticmethod
    def get_product(obj):
        product = Product.objects.get(pk=obj.product.id)
        return {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "stock": product.stock,
            "price": product.price,
        }
