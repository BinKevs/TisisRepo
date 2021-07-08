from rest_framework import serializers
from transaction_items.models import Transaction_item
from transactions.serializers import TransactionSerializer
from products.serializers import ProductSerializer
from products.models import Product
from transactions.models import Transaction
from datetime import datetime, timedelta
from categories.models import Category

# from django.utils import timezone
class Transaction_itemSerializer(serializers.ModelSerializer):
    transaction = serializers.PrimaryKeyRelatedField(
        queryset=Transaction.objects.all())
   
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all())
    product_info = serializers.SerializerMethodField()
    category_info = serializers.SerializerMethodField()

    transaction_date = serializers.SerializerMethodField()

    class Meta:
        model = Transaction_item
        fields = "__all__"

    @ staticmethod
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
