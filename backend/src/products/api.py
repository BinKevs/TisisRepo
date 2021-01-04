from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
from inventories.models import Inventory
from suppliers.models import Supplier
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
    # def create(self, request, *args, **kwargs):
    #     new_stock = request.data['new_stock']
    #     supplier = Supplier.objects.get(
    #         pk=int(request.data['supplier']))
    #     product = Product.objects.get(
    #         pk=int(Product.objects.all().order_by('id').reverse()[
    #             0].id))
    #     print(new_stock, supplier, product)
    #     Inventory.save_inventory(
    #         new_stock=new_stock,
    #         supplier=supplier,
    #         product=product,
    #     )
