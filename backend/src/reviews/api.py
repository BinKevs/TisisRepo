
from .models import Review
from rest_framework import viewsets, permissions
from .serializers import ReviewSerializer
from rest_framework.response import Response
from rest_framework import status
from transaction_items.models import Transaction_item
from transactions.models import Transaction
from transactions.serializers import TransactionSerializer
from django.core import serializers
class ReviewViewSet(viewsets.ModelViewSet):
    
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def create(self, request, *args, **kwargs):
        request.data['user'] = request.user.id
        Serializer = ReviewSerializer(data=request.data)
        Serializer.is_valid(raise_exception=True)
        Serializer.save()
        context = Serializer.data
        transaction_item_current = Transaction_item.objects.get(id=request.data['transaction_item_id'])
        transaction_item_current.review = Review.objects.get(id=Serializer.data["id"]) 
        transaction_item_current.save()
        transaction_current = Transaction.objects.get(id=request.data['transaction_id'])
        return Response(TransactionSerializer(transaction_current).data,status=status.HTTP_201_CREATED)
        # Transaction_item.objects.get(id=request.data['transaction_item_id'])