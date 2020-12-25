from django.db import models
from suppliers.models import Supplier
from django.db.models.signals import pre_save
from django.dispatch import receiver
from products.models import Product


class Inventory(models.Model):
    new_stock = models.IntegerField()
    supplier = models.ForeignKey(
        Supplier, related_name="supplier_set", on_delete=models.CASCADE, null=True)
    product = models.ForeignKey(
        Product, related_name="product_inventory_set", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return str(self.id)

    @staticmethod
    def save_inventory(new_stock, supplier, product):
        inventory = Inventory(
            new_stock=new_stock,
            supplier=supplier,
            product=product,
        )

        inventory.save()
        return inventory
