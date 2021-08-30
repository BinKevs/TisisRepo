from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator
from django.contrib.auth.models import User

class Transaction(models.Model):
    transaction_id = models.CharField(max_length=255, null=True,blank=True)
    creator = models.ForeignKey(
        User, related_name="creator_transaction", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(
        auto_now_add=True, blank=True)
    totalAmount = models.DecimalField(
        max_digits=20, decimal_places=2, null=True)
    amount_tendered = models.DecimalField(max_digits=12, decimal_places=2)
    change = models.DecimalField(max_digits=12, decimal_places=2,validators=[MinValueValidator(0.00)])
    quantity = models.IntegerField()
    mode_of_payment = models.CharField(max_length=255, null=False,blank=True)
    status = models.CharField(max_length=255, null=True)
    address = models.CharField(max_length=255, null=True,blank=True)
    contact_number = models.CharField(max_length=25, null=True,blank=True)
    def __str__(self):
        return str(self.id)
    def save(self,*args, **kwargs):
       if not self.transaction_id:
           prefix = 'TI{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(transaction_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().transaction_id[-4:]
              self.transaction_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.transaction_id = prefix+'{0:04d}'.format(1)
       super(Transaction, self).save(*args, **kwargs)
    @staticmethod
    def save_transaction(totalAmount, amount_tendered, change, quantity,mode_of_payment):
        transaction = Transaction(
            totalAmount=totalAmount,
            amount_tendered=amount_tendered,
            change=change,
            quantity=quantity,
            mode_of_payment= mode_of_payment,
        )
        transaction.save()

# class OnlineTransaction(models.Model):
#     transaction = models.ForeignKey(Transaction, related_name="online_transaction", on_delete=models.CASCADE, null=True,blank=True)
#     status = models.CharField(max_length=255, null=True)
#     shipping_details = models.CharField(max_length=255, null=True,blank=True)