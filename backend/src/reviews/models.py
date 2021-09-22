from django.db import models
from django.contrib.auth.models import User
from products.models import Product
# Create your models here.
class Reveiew(models.Model):
    user = models.ForeignKey(
        User, related_name="user_accouunt_review", on_delete=models.CASCADE, null=True)
    product = models.ForeignKey(
        Product, related_name="product_review", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    star_rate = models.IntegerField()
    comment = models.CharField(max_length=2000, null=True)
