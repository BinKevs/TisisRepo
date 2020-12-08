from django.db import models
# from djmoney.models.fields import MoneyField
from suppliers.models import Supplier
# from moneyfield import MoneyField


class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=500, blank=True)
    price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.name
# supplier = models.ForeignKey(
#         Supplier, related_name="products", on_delete=models.CASCADE, null=True)
