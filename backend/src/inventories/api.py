from inventories.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer
from suppliers.models import Supplier
from products.models import Product
from rest_framework import filters


class InventoryViewSet(viewsets.ModelViewSet):
    
    queryset = Inventory.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at']
    serializer_class = InventorySerializer

