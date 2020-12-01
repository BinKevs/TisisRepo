from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # def get_queryset(self):
    #     return
    #     self.request.user.articles.all()
