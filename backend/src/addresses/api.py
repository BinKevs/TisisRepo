from .models import Address
from .serializers import AddressSerializer
from rest_framework import viewsets, permissions

class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer
 