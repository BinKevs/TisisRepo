
from django.db import models
from products.models import Product
from transactions.models import Transaction
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.utils import timezone
from product_variations.models import Product_variation
class Transaction_item(models.Model):
    transaction_item_id = models.CharField(max_length=255, null=True)
    product = models.ForeignKey(
        Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    transaction = models.ForeignKey(
        Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True, blank=True)
    product_with_variation = models.ForeignKey(
        Product_variation, related_name="product_with_variation_transaction_set", on_delete=models.CASCADE, null=True)
    quantity = models.IntegerField(null=True)
    def save(self,*args, **kwargs):
       if not self.transaction_item_id:
           prefix = 'TI-I{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           prev_instances = self.__class__.objects.filter(transaction_item_id__contains=prefix)
           if prev_instances.exists():
                last_instance_id = prev_instances.last().transaction_item_id[-4:]
                self.transaction_item_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
                
           else:
                self.transaction_item_id = prefix+'{0:04d}'.format(1)
                
       super(Transaction_item, self).save(*args, **kwargs)
    def __str__(self):
        return str(self.id)
