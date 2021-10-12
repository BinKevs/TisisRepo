from .models import Product_variation
from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import Product_VariationSerializer
from products.serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework import status
# from suppliers.models import Supplier


class ProductVariationViewSet(viewsets.ModelViewSet):
    
    queryset = Product_variation.objects.all()
    serializer_class = Product_VariationSerializer

    def update(self,request,pk,*args,**kwargs):
        prod_variation = Product_variation.objects.get(pk=pk)
        data = request.data
        prod_variation.stock = data.get("stock",prod_variation.stock)
        prod_variation.size = data.get("size",prod_variation.size)
        prod_variation.color = data.get("color",prod_variation.color)
        prod_variation.weight = data.get("weight",prod_variation.weight)
        prod_variation.save()

        return Response(ProductSerializer(Product.objects.get(id=data["product_id"])).data,status=status.HTTP_201_CREATED)
# 