from .models import Product_file
from .serializers import Product_FileSerializer
from rest_framework import viewsets, permissions

class Product_FileViewSet(viewsets.ModelViewSet):
    queryset = Product_file.objects.all()
    serializer_class = Product_FileSerializer
    # def create(self, request, *args, **kwargs):
 