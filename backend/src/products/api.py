from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
from inventories.models import Inventory
from suppliers.models import Supplier


class ProductViewSet(viewsets.ModelViewSet):
    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

