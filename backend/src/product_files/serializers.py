from products.models import Product
from suppliers.models import Supplier
from product_files.models import Product_file
from rest_framework import serializers

class Product_FileSerializer(serializers.ModelSerializer):
    # product = serializers.PrimaryKeyRelatedField(
    #     queryset=Product.objects.all())
    # product_info = serializers.SerializerMethodField()
   
    class Meta:
        model = Product_file
        fields = '__all__'
    # @ staticmethod
    # def get_product_info(obj):
    #     product = Product.objects.get(pk=obj.product.id)
    #     supplier = Supplier.objects.get(pk=obj.product.supplier.id)
    #     return {
    #         "id": product.id,
    #         "name": product.name,
    #         "description": product.description,
    #         "stock": product.stock,
    #         "price": product.price,
    #         "supplier_name" : supplier.name,
    #     }