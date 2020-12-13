from django.db import models
from products.models import Product
from transactions.models import Transaction


class Transaction_item(models.Model):
    # product = models.ForeignKey(
    #     Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    # transaction = models.ForeignKey(
    #     Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True)
    product_id = models.IntegerField(null=True)
    product_name = models.CharField(max_length=100, null=True)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=True)
    quantity = models.IntegerField(null=True)

    def __str__(self):
        return str(self.id)
