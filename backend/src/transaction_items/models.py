
from django.db import models
from products.models import Product
from transactions.models import Transaction
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


class Transaction_item(models.Model):

    product = models.ForeignKey(
        Product, related_name="product_transaction_item_set", on_delete=models.CASCADE, null=True)
    transaction = models.ForeignKey(
        Transaction, related_name="transaction_set", on_delete=models.CASCADE, null=True, blank=True)
    # product_id = models.IntegerField(null=True)
    # product_name = models.CharField(max_length=100, null=True)
    quantity = models.IntegerField(null=True)

    def __str__(self):
        return str(self.id)

    # @receiver(post_save, sender='transactions.Transaction')
    # def add_transaction_id_on_save(sender, instance, created, **kwargs):
    #     ts = Transaction_item.objects.get(id=instance.id)
    #     ts.id = instance.id
    #     ts.save()
    # @receiver(post_save, sender='transaction_items.Transaction_item')
    # def update_transaction_transaction_on_save(sender, instance, created, ** kwargs):
    #     print(Transaction_item.product)

    #     # sender.objects.get(instance.product).update(
    #     #     Product.objects.get(pk=instance.prod_id))
    #     # instance.product = Product.objects.get(pk=instance.prod_id)
    #     # print(instance.product)
    #     # instance.save()
