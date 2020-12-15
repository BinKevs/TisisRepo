from rest_framework import serializers
from transaction_items.models import Transaction_item
from transactions.serializers import TransactionSerializer
from products.serializers import ProductSerializer
from products.models import Product


class Transaction_itemSerializer(serializers.ModelSerializer):
    transaction = TransactionSerializer(read_only=True)
    # product = ProductSerializer(read_only=True)
    product = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all())
    product = serializers.SerializerMethodField()

    class Meta:
        model = Transaction_item
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
