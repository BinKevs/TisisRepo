from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer


class TransactionViewSet(viewsets.ModelViewSet):
   
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
 