from django.core.paginator import Page
from inventories.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer
from suppliers.models import Supplier
from products.models import Product
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination

class InventoryViewSet(viewsets.ModelViewSet):
    
    queryset = Inventory.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at'] 
    serializer_class = InventorySerializer
    # pagination_class = PageNumberPagination
