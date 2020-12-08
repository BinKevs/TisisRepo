from django.db import models
from products.models import Product
from transactions.models import Transaction


class Transaction_item(models.Model):
    product = models.ForeignKey(
        Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    transaction = models.ForeignKey(
        Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField()

    def __str__(self):
        return self.id
