from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer


class TransactionViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    # def perform_create(self, serializer):
    #     serializer.save(supplier=Supplier.objects.get(
    #         pk=self.request.data.get('supplier')))
    #     serializer.save(product=Product.objects.get(
    #         pk=self.request.data.get('product')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
