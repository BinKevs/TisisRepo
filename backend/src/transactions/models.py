from django.db import models
import datetime


class Transaction(models.Model):
    created_at = models.DateTimeField(
        default=datetime.datetime.now(), blank=True)
    totalAmount = models.DecimalField(
        max_digits=6, decimal_places=2, null=True)
    amount_tendered = models.DecimalField(max_digits=6, decimal_places=2)
    change = models.DecimalField(max_digits=6, decimal_places=2)
    quantity = models.IntegerField()

    def __str__(self):
        return str(self.id)

    @staticmethod
    def save_transaction(totalAmount, amount_tendered, change, quantity):
        transaction = Transaction(
            totalAmount=totalAmount,
            amount_tendered=amount_tendered,
            change=change,
            quantity=quantity
        )
        transaction.save()
        return transaction
