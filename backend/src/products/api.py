from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
# from suppliers.models import Supplier


class ProductViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    # def perform_create(self, serializer):
    #     serializer.save(supplier=Supplier.objects.get(
    #         pk=self.request.data.get('supplier')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
