from suppliers.models import Supplier
from rest_framework import viewsets, permissions
from .serializers import SupplierSerializer

# Lead Viewset


class SupplierViewSet(viewsets.ModelViewSet):
   
    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()
