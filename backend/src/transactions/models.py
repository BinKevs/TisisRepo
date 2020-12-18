from django.db import models


class Transaction(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, blank=True)
    amount_tendered = models.DecimalField(max_digits=6, decimal_places=2)
    change = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.id)
