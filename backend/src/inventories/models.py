from django.db import models
from suppliers.models import Supplier
from products.models import Product


class Inventory(models.Model):
    stock = models.IntegerField()
    supplier = models.ForeignKey(
        Supplier, related_name="supplier_set", on_delete=models.CASCADE, null=True)
    product = models.ForeignKey(
        Product, related_name="product_inventory_set", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
