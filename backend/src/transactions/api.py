from transactions.models import Transaction
from rest_framework import viewsets, permissions
from .serializers import TransactionSerializer
from rest_framework import filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
class TransactionViewSet(viewsets.ModelViewSet):
   
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    ordering_fields = ['created_at'] 
    filter_backends = [filters.OrderingFilter]
    def update(self,request,pk,*args,**kwargs):
        transaction = Transaction.objects.get(pk=pk)
        data = request.data
        transaction.user = data.get("user",transaction.user)
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
        return Response(self.get_serializer(transaction).data,status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def TransactionStatusUpdate(request, pk):
    Transaction.objects.filter(pk=pk).update(status=request.data["status"])
    serializer = TransactionSerializer(Transaction.objects.get(id=pk))
    return Response(serializer.data,status.HTTP_201_CREATED)
