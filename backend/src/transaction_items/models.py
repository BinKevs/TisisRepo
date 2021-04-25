
from django.db import models
from products.models import Product
from transactions.models import Transaction
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


class Transaction_item(models.Model):

    product = models.ForeignKey(
        Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    transaction = models.ForeignKey(
        Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True, blank=True)

    quantity = models.IntegerField(null=True)

    def __str__(self):
        return str(self.id)
