from rest_framework import serializers
from inventories.models import Inventory
from suppliers.serializers import SupplierSerializer
from products.serializers import ProductSerializer
from products.models import Product
from suppliers.models import Supplier
from product_variations.models import Product_variation

class InventorySerializer(serializers.ModelSerializer):
    # supplier = serializers.PrimaryKeyRelatedField(
    #     queryset=Supplier.objects.all())
    supplier_info = serializers.SerializerMethodField()
    
    # product = serializers.PrimaryKeyRelatedField(
    #     queryset=Product.objects.all())
    product_info = serializers.SerializerMethodField()
    product_variation_info = serializers.SerializerMethodField()
    
    class Meta:
        model = Inventory
        fields = '__all__'

    @staticmethod
    def get_product_info(obj):
        product = Product.objects.get(pk=obj.product.id)
        return {
            "id": product.id,
            "name": product.name,
            "description": product.description,
            "stock": product.stock,
            "price": product.price,
        }
    @staticmethod
    def get_product_variation_info(obj):
        try :
            product_variation = Product_variation.objects.get(pk=obj.product_with_variation.id)
            product = Product.objects.get(pk=obj.product_with_variation.product.id)
            return {
                "product_variation_id": product_variation.id,
                "color":product_variation.color,
                "size":product_variation.size,
                "stock":product_variation.stock,
                "product_id": product.id,
                "name": product.name,
                "description": product.description,
                "price": product.price,
            }
        except:
             return {
                "product_variation_id": None,
                "color":None,
                "size":None,
                "stock":None,
                "product_id": None,
                "name": None,
                "description": None,
                "price": None,
            }
    @staticmethod
    def get_supplier_info(obj):
        supplier = Supplier.objects.get(pk=obj.supplier.id)
        return {
            "id": supplier.id,
            "name": supplier.name,
            "address": supplier.address,
        }
