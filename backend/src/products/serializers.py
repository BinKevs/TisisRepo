from rest_framework import serializers
from products.models import Product
from suppliers.serializers import SupplierSerializer
from suppliers.models import Supplier
from categories.models import Category
from product_files.models import Product_file
from product_files.serializers import Product_FileSerializer
from product_variations.serializers import Product_VariationSerializer
# class ProductAddSerializer(serializers.ModelSerializer):
   
#     class Meta:
#         model = Product
#         fields = '__all__'
#         extra_kwargs = {
#             "file_content": {
#                 "required": False,
#             }
#         }



class ProductSerializer(serializers.ModelSerializer):
    # supplier = serializers.PrimaryKeyRelatedField(
    #     queryset=Supplier.objects.all())
    supplier_info = serializers.SerializerMethodField()
    # category = serializers.PrimaryKeyRelatedField(
    #     queryset=Category.objects.all())
    category_info = serializers.SerializerMethodField()
    # file_content = serializers.PrimaryKeyRelatedField(many=True,
    #     queryset=Product_file.objects.all())
    file_content = Product_FileSerializer(many=True,read_only=True)
    variation = Product_VariationSerializer(many=True,read_only=True)
    # variation = Product_VariationSerializer(many=True,read_only=True)
    # variation = serializers.PrimaryKeyRelatedField(
    #     queryset=Product_variation.objects.all())
    # variation_info = serializers.SerializerMethodField()
    # file_content_info = serializers.SerializerMethodField()
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
    # @staticmethod
    # def get_file_content_info(obj):
    #     print(obj)
        # filecontent = Product_file.objects.get(pk=obj.file_content.id)
        # return {
        #     "id": filecontent.id,
        #     "image": filecontent.image,
        # }

    @staticmethod
    def get_category_info(obj):
        category = Category.objects.get(pk=obj.category.id)
        return {
            "id": category.id,
            "name": category.name,
        }
    # @staticmethod
    # def get_variation_info(obj):
    #     try:
    #         variation = Product_variation.objects.filter(product=obj.id)
    #         print(variation)
    #         for item in variation:
    #             return {
    #                     "id" : item.id
    #                 }
    #     except:
    #         return {
    #             "id" : None
    #         }
    