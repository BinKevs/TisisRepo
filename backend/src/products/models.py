from django.db import models
# from djmoney.models.fields import MoneyField
from suppliers.models import Supplier
# from inventories.models import Inventory
# from moneyfield import MoneyField
from django.db.models.signals import pre_save
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

    @receiver(pre_save, sender='inventories.Inventory')
    def update_post_votes_on_save(sender, instance, **kwargs):
        if instance.id:
            old_stock = Product.stock.get(pk=instance.product.id)
            instance.stock_added -= old_stock.value
        instance.product.stock += instance.new_stock
        instance.product.save()
