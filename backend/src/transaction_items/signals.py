# from django.db.models.signals import pre_save, post_save
# from django.dispatch import receiver
# from .models import Transaction_item
# from transactions.models import Transaction


# @receiver(post_save, sender=Transaction)
# def add_transaction_id_on_save(sender, instance, created, **kwargs):
#     if created:
#         ts = Transaction_item.objects.get()
#         ts.id = instance.id
#         ts.save()
