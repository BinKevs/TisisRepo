from categories.models import Category
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer
# from suppliers.models import Supplier


class CategoryViewSet(viewsets.ModelViewSet):
    
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


