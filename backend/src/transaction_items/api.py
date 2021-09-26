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
    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        transactionsSerializer = TransactionSerializer(data=request.data)
        transactionsSerializer.is_valid(raise_exception=True)
        transactionsSerializer.save()
        data = request.data.get("items")
        transaction_current = Transaction.objects.get(id=transactionsSerializer.data['id'])
        for key in data:
            key['transaction'] = Transaction.objects.get(id=transactionsSerializer.data['id']).id
            key['product'] = key['product_id']
        serializer = Transaction_item_for_create_Serializer(data=data, many=True)      
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        for item in serializer.data:
            transaction_current.items.add(item['id'])
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data,status=status.HTTP_201_CREATED,headers=headers)