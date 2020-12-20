# from django.db.models.signals import pre_save, post_save
# from django.dispatch import receiver
# from .models import Transaction_item
# from transactions.models import Transaction


# @receiver(post_save, sender=Transaction)
# def add_transaction_id_on_save(sender, instance, created, **kwargs):
#     print(instance.request.data.get('amount_tendered'))
