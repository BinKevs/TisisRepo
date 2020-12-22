from rest_framework import serializers
from transactions.models import Transaction
# Lead Serializer


class TransactionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Transaction
        fields = '__all__'
