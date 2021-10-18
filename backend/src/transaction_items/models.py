
from django.db import models
from products.models import Product
from transactions.models import Transaction
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils import timezone
from product_variations.models import Product_variation
from reviews.models import Review
from refunds.models import Refund
class Transaction_item(models.Model):
    
    product = models.ForeignKey(
        Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    transaction = models.ForeignKey(
        Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True, blank=True)
    product_with_variation = models.ForeignKey(
        Product_variation, related_name="product_with_variation_transaction_set", on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(null=True)
    review = models.ForeignKey(
        Review, related_name="transaction_item_review", on_delete=models.CASCADE, null=True)
    refund = models.ForeignKey(
        Refund, related_name="transaction_item_refund", on_delete=models.CASCADE, null=True)
   
    def __str__(self):
        return str(self.id)
