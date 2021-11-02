from transaction_items.models import Transaction_item
from rest_framework import viewsets, permissions
from .serializers import Transaction_itemSerializer,Transaction_item_for_create_Serializer
from transactions.models import Transaction
from products.models import Product
# from product_variations.models import Product_variation
from rest_framework.response import Response
from rest_framework import status
from collections import defaultdict
from django.core.exceptions import ValidationError
from transactions.serializers import TransactionSerializer
from activities_log.models import Log_Activity
from rest_framework import filters
from django.utils import timezone


from rest_framework.decorators import api_view, parser_classes
class TransactionViewSet(viewsets.ModelViewSet):
    
    queryset = Transaction_item.objects.all()
    serializer_class = Transaction_itemSerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
  