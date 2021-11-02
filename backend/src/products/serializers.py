from rest_framework import serializers
from products.models import Product
from suppliers.serializers import SupplierSerializer
from suppliers.models import Supplier
from categories.models import Category
from product_files.models import Product_file
from product_files.serializers import Product_FileSerializer
from product_variations.serializers import Product_VariationSerializer


class ProductSerializer(serializers.ModelSerializer):
    supplier_info = serializers.SerializerMethodField()
    category_info = serializers.SerializerMethodField()
    file_content = Product_FileSerializer(many=True,read_only=True)
    variation = Product_VariationSerializer(many=True,read_only=True)
    class Meta:
        model = Product
        fields = '__all__'
        # extra_kwargs = {
        #     "variation": {
        #         "required": False,
        #     }
        # }
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


class Product_serializer_for_transaction(serializers.ModelSerializer):
    category_info = serializers.SerializerMethodField()
    file_content = Product_FileSerializer(many=True,read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price','category_info','file_content']
    @staticmethod
    def get_category_info(obj):
        category = Category.objects.get(pk=obj.category.id)
        return {
            "id": category.id,
            "name": category.name,
        }