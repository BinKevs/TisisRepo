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
#  OnlineTransactionSerializer
# class OnlineTransactionViewSet(viewsets.ModelViewSet):
   
#     queryset = OnlineTransaction.objects.all()
#     serializer_class = OnlineTransactionSerializer

#     def create(self, request, *args, **kwargs):
#         serializer = OnlineTransactionSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         content = Transaction.objects.create(creator=request.user.id,totalAmount=request.data['totalAmount'],amount_tendered=request.data['amount_tendered'],change=request.data['change'],quantity=request.data['quantity'],mode_of_payment=request.data['mode_of_payment'])
#         OnlineTransaction.objects.filter(pk=serializer.data['id']).update(transaction=content)
#         context = serializer.data
#         context["transaction"] = content.id
#         return Response(context,status=status.HTTP_201_CREATED)

@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def TransactionStatusUpdate(request, pk):
    Transaction.objects.filter(pk=pk).update(status=request.data["status"])
    serializer = TransactionSerializer(Transaction.objects.get(id=pk))
    return Response(serializer.data,status.HTTP_201_CREATED)
