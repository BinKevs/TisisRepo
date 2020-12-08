from transaction_items.models import Transaction_item
from rest_framework import viewsets, permissions
from .serializers import Transaction_itemSerializer
from transactions.models import Transaction
from products.models import Product


class TransactionViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Transaction_item.objects.all()
    serializer_class = Transaction_itemSerializer

    def perform_create(self, serializer):
        serializer.save(transaction=Transaction.objects.get(
            pk=self.request.data.get('transaction')))
        serializer.save(product=Product.objects.get(
            pk=self.request.data.get('product')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
