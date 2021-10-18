from categories.models import Category
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer
from rest_framework import filters


class CategoryViewSet(viewsets.ModelViewSet):
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


