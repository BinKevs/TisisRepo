from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from transaction_items.serializers import Transaction_item_for_create_Serializer, Transaction_itemSerializer   
from reviews.serializers import ReviewSerializer
from transaction_items.models import Transaction_item
from reviews.models import Review
from product_variations.models import Product_variation
class TransactionViewSet(viewsets.ModelViewSet):
   
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    ordering_fields = ['created_at'] 
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
            
            pv = Product_variation.objects.get(pk=key['product_with_variation'])
            pv.stock = (pv.stock - key['quantity'])
            pv.save()
        serializer = Transaction_item_for_create_Serializer(data=data, many=True)      
        serializer.is_valid(raise_exception=True)
        serializer.save()
        for item in serializer.data:
            transaction_current.items.add(item['id'])
        headers = self.get_success_headers(serializer.data)
        print(self.get_serializer(transaction_current).data)
        return Response(self.get_serializer(transaction_current).data,status=status.HTTP_201_CREATED,headers=headers)






    def update(self,request,pk,*args,**kwargs):
        data = request.data
        if(request.data.get('transaction_id') == None):
            transaction = Transaction.objects.get(pk=pk)
            transaction.user = data.get("user",transaction.user)
        else:
            transaction = Transaction.objects.get(pk=request.data['transaction_id'])
            request.data['user'] = request.user.id
            RevSerializer = ReviewSerializer(data=request.data)
            RevSerializer.is_valid(raise_exception=True)
            RevSerializer.save()
            transaction_item_current = Transaction_item.objects.get(id=request.data['transaction_item_id'])
            transaction_item_current.review = Review.objects.get(id=RevSerializer.data["id"]) 
            transaction_item_current.save()
 
        
        transaction.created_at = data.get("created_at",transaction.created_at)
        transaction.totalAmount = data.get("totalAmount",transaction.totalAmount)
        transaction.quantity = data.get("quantity",transaction.quantity)
        transaction.payment_method = data.get("payment_method",transaction.payment_method)
        transaction.status = data.get("status",transaction.status)
        transaction.address = data.get("address",transaction.address)
        transaction.contact_number = data.get("contact_number",transaction.contact_number)
        # transaction.items = data.get("items",transaction.items)
        transaction.order_status = data.get("order_status",transaction.order_status)
        transaction.tracking_number = data.get("tracking_number",transaction.tracking_number)
        transaction.save()
        if(request.data.get('transaction_id') == None):
            context = self.get_serializer(transaction).data
        else:
            context = self.get_serializer(Transaction.objects.get(id=request.data['transaction_id'])).data
        return Response(context,status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def TransactionStatusUpdate(request, pk):
    Transaction.objects.filter(pk=pk).update(status=request.data["status"])
    serializer = TransactionSerializer(Transaction.objects.get(id=pk))
    return Response(serializer.data,status.HTTP_201_CREATED)
