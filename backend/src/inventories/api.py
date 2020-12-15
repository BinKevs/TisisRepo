from inventories.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer
from suppliers.models import Supplier
from products.models import Product
from rest_framework import filters


class InventoryViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Inventory.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at']
    serializer_class = InventorySerializer

    # def perform_create(self, serializer):
    #     print(Product.objects.get(
    #         pk=self.request.data.get('product_id')))
    #     serializer.save(supplier=Supplier.objects.get(
    #         pk=self.request.data.get('supplier_id')), product=Product.objects.get(
    #         pk=self.request.data.get('product_id')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
