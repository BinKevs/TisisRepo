from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator
from django.contrib.auth.models import User

class Transaction(models.Model):
    creator = models.ForeignKey(
        User, related_name="creator_transaction", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(
        auto_now_add=True, blank=True)
    totalAmount = models.DecimalField(
        max_digits=20, decimal_places=2, null=True)
    amount_tendered = models.DecimalField(max_digits=12, decimal_places=2)
    change = models.DecimalField(max_digits=12, decimal_places=2,validators=[MinValueValidator(0.00)])
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.id)

    @staticmethod
    def save_transaction(totalAmount, amount_tendered, change, quantity):
        transaction = Transaction(
            totalAmount=totalAmount,
            amount_tendered=amount_tendered,
            change=change,
            quantity=quantity,
        )
        transaction.save()
