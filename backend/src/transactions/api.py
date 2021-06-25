from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer
from rest_framework import filters

class TransactionViewSet(viewsets.ModelViewSet):
   
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    ordering_fields = ['created_at'] 
    filter_backends = [filters.OrderingFilter]
 