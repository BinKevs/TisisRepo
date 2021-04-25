from django.db import models
from suppliers.models import Supplier
from django.db.models.signals import pre_save
from django.dispatch import receiver
from products.models import Product
from categories.models import Category
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


class Inventory(models.Model):
    new_stock = models.IntegerField()
    supplier = models.ForeignKey(
        Supplier, related_name="supplier_set", on_delete=models.CASCADE, null=True)
    product = models.ForeignKey(
        Product, related_name="product_inventory_set", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return str(self.id)


    @receiver(post_save, sender='products.Product')
    def add_inventory_on_save_from_product(sender, instance, created, **kwargs):
        if created:
            supplier = Supplier.objects.get(id=instance.supplier.id)
            product = Product.objects.get(id=instance.id)
            inventory = Inventory(
                new_stock=instance.stock,
                supplier=supplier,
                product=product,
            )
            inventory.save()
            return inventory
