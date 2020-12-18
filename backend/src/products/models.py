from django.db import models
# from djmoney.models.fields import MoneyField
from suppliers.models import Supplier
# from inventories.models import Inventory
# from moneyfield import MoneyField
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=500, blank=True)
    stock = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name
    # supplier = models.ForeignKey(
    #         Supplier, related_name="products", on_delete=models.CASCADE, null=True)

    @receiver(post_save, sender='inventories.Inventory')
    def update_product_inventory_on_save(sender, instance, raw, **kwargs):
        print(instance)
        print(raw)
        if instance.id:
            product = Product.objects.get(id=instance.product.id)
        instance.product.stock += instance.new_stock
        instance.product.save()

    @receiver(post_save, sender='transaction_items.Transaction_item')
    def update_product_transaction_on_save(sender, instance, **kwargs):
        if instance.id:
            product = Product.objects.get(id=instance.product_id)
        instance.product.stock -= instance.quantity
        instance.product.save()
