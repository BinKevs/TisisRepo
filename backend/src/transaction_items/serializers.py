from rest_framework import serializers
from transaction_items.models import Transaction_item
from products.serializers import ProductSerializer,Product_serializer_for_transaction
from products.models import Product
from transactions.models import Transaction
from datetime import datetime, timedelta
from categories.models import Category
from product_variations.models import Product_variation
# from django.utils import timezone
class Transaction_itemSerializer(serializers.ModelSerializer):
    # transaction = serializers.PrimaryKeyRelatedField(
    #     queryset=Transaction.objects.all())
    transaction_date = serializers.SerializerMethodField()
    # online_transaction_info = serializers.SerializerMethodField()
    # product = serializers.PrimaryKeyRelatedField(
    #     queryset=Product.objects.all())
    product = ProductSerializer(read_only=True)
    # product_info = serializers.SerializerMethodField()
    # category_info = serializers.SerializerMethodField()
    product_variation_info = serializers.SerializerMethodField()
   

    class Meta:
        model = Transaction_item
        fields = "__all__"

    # @ staticmethod
    # def get_product_info(obj):
    #     product = Product.objects.get(pk=obj.product.id)
    #     return {
    #         "id": product.id,
    #         "name": product.name,
    #         "description": product.description,
    #         "price": product.price,

    #     }
    @staticmethod
    def get_product_variation_info(obj):
        try :
            product_variation = Product_variation.objects.get(pk=obj.product_with_variation.id)
            return {
                "product_variation_id": product_variation.id,
                "color":product_variation.color,
                "size":product_variation.size,
                "stock":product_variation.stock,
            }
        except:
             return {
                "product_variation_id": None,
                "color":None,
                "size":None,
                "stock":None,
            }
    @staticmethod
    def get_category_info(obj):
        product = Product.objects.get(pk=obj.product.id)
        category = Category.objects.get(pk=product.category.id)
        return {
            "id": category.id,
            "name": category.name,
        }
    @staticmethod
    def get_transaction_date(obj):
        try:
            transaction = Transaction.objects.get(pk=obj.transaction.id)
            
            date = transaction.created_at
            modified_date = date + timedelta(hours=8)
        
            return {
                
                "id": transaction.id,
                "created_at": datetime.strftime(modified_date,'%b %d %Y %H:%M:%S')
            }
        except:
            return {
                "id": None,
                "created_at": None
            }


class Transaction_item_for_create_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction_item
        fields = "__all__"