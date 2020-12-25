from rest_framework import serializers
from products.models import Product
from suppliers.serializers import SupplierSerializer
from suppliers.models import Supplier
from categories.models import Category


class ProductSerializer(serializers.ModelSerializer):
    supplier = serializers.PrimaryKeyRelatedField(
        queryset=Supplier.objects.all())
    supplier_info = serializers.SerializerMethodField()
    category = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all())
    category_info = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    @staticmethod
    def get_supplier_info(obj):
        supplier = Supplier.objects.get(pk=obj.supplier.id)
        return {
            "id": supplier.id,
            "name": supplier.name,
            "address": supplier.address,
        }

    @staticmethod
    def get_category_info(obj):
        category = Category.objects.get(pk=obj.category.id)
        return {
            "id": category.id,
            "name": category.name,
        }
