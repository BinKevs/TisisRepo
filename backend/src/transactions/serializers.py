from rest_framework import serializers
from transactions.models import Transaction
# Lead Serializer


class TransactionSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField()

    class Meta:
        model = Transaction
        fields = '__all__'
