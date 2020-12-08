from inventories.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer
from suppliers.models import Supplier
from products.models import Product


class InventoryViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer

    def perform_create(self, serializer):
        serializer.save(supplier=Supplier.objects.get(
            pk=self.request.data.get('supplier')))
        serializer.save(product=Product.objects.get(
            pk=self.request.data.get('product')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
