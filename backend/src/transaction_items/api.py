from transaction_items.models import Transaction_item
from rest_framework import viewsets, permissions
from .serializers import Transaction_itemSerializer
from transactions.models import Transaction
from products.models import Product
from rest_framework.response import Response
from rest_framework import status
from collections import defaultdict
from django.core.exceptions import ValidationError
from transactions.serializers import TransactionSerializer
from activities_log.models import Log_Activity
from rest_framework import filters
from django.utils import timezone
class TransactionViewSet(viewsets.ModelViewSet):
    
    queryset = Transaction_item.objects.all()
    serializer_class = Transaction_itemSerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
    def create(self, request, *args, **kwargs):
        # totalAmount = request.data['totalAmount']
        # amount_tendered = request.data['amount_tendered']
        # change = request.data['change']
        # quantity = request.data['quantity']
        # print(change)
        # if change < 0 :
        #     return Response(data="Sorry, insufficient amount tendered", status=status.HTTP_400_BAD_REQUEST)
        # else :

        # Transaction.save_transaction(
        #     totalAmount=totalAmount,
        #     amount_tendered=amount_tendered,
        #     change=change,
        #     quantity=quantity
        # )
        Log_Activity.save_log_activity(
            account=request.user,
            action_done = request.data['action_done'],
        )
        transaction_data = {}
        transaction_data['creator'] = request.user.id
        data = []
        for key in request.data:
            if(key != 'items'):
                transaction_data[key] = request.data[key]
       
        transactionsSerializer = TransactionSerializer(data=transaction_data)
        if transactionsSerializer.is_valid():
            transactionsSerializer.save()
            data = request.data.get("items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        arrOfKeys = []
        for key in data:
            arrOfKeys.append(key['product_id'])
        for key in range(0, len(data)):
            data[key]['product'] = arrOfKeys[key]
            data[key]['transaction'] = Transaction.objects.all().order_by('id').reverse()[
                0].id
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        # return Response(transactionsSerializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # serializer = BlogPostSerializer(blog_post, data=request.data)
		# data = {}
		# if serializer.is_valid():
		# 	serializer.save()
		# 	return Response(serializer.data, status=status.HTTP_201_CREATED)
		# return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
