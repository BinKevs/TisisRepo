from django.db import models
from transactions.models import Transaction
# from transaction_items.models import Transaction_item
from django.contrib.auth.models import User
# Create your models here.
class Refund(models.Model):
    user = models.ForeignKey(
        User, related_name="user_refunds", on_delete=models.CASCADE, null=True)
    transaction_item = models.ForeignKey(
        "transaction_items.Transaction_item", related_name="transaction_item_refunds", on_delete=models.CASCADE, null=True, blank=True)
    product_condition_video = models.FileField(null=True, blank=True)
    description = models.TextField(null=True,blank=True)
    created_at = models.DateTimeField(
        auto_now_add=True, null=True, blank=True)
    response = models.TextField(null=True,blank=True)
    status = models.CharField(max_length=255, null=True,blank=True)