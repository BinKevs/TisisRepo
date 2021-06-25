from suppliers.models import Supplier
from rest_framework import viewsets, permissions,generics
from .serializers import SupplierSerializer
from rest_framework.pagination import PageNumberPagination
# Lead Viewset


class SupplierViewSet(viewsets.ModelViewSet):
   
    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()
 

class SupplierViewSetWithPagination(generics.ListAPIView):
    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()
    pagination_class = PageNumberPagination

