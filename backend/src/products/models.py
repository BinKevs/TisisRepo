from django.db import models
from suppliers.models import Supplier
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from categories.models import Category
from django_resized import ResizedImageField
from django.utils import timezone
class Product(models.Model):
    product_id = models.CharField(max_length=255, null=True)
    name = models.CharField(max_length=100, unique=True)
    category = models.ForeignKey(
        Category, related_name="category_product", on_delete=models.CASCADE, null=True)
    supplier = models.ForeignKey(
        Supplier, related_name="supplier_product", on_delete=models.CASCADE, null=True)
    image = ResizedImageField(size=[600,410],crop=['middle', 'center'], default='No-Image-Available.jpeg',null=True, blank=True)
    description = models.TextField(blank=True)
    stock = models.IntegerField()
    price = models.DecimalField(max_digits=20, decimal_places=2)

    def __str__(self):
        return self.name
    def save(self,*args, **kwargs):
       if not self.product_id:
           prefix = 'PI{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(product_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().product_id[-4:]
              self.product_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.product_id = prefix+'{0:04d}'.format(1)
       super(Product, self).save(*args, **kwargs)
    @receiver(post_save, sender='inventories.Inventory')
    def update_product_inventory_on_save(sender, instance, raw, **kwargs):
        print(instance)
        print(raw)
        if instance.id:
            product = Product.objects.get(id=instance.product.id)
        instance.product.stock += int(instance.new_stock)
        instance.product.save()

    @receiver(post_save, sender='transaction_items.Transaction_item')
    def update_product_transaction_on_save(sender, instance, **kwargs):
        if instance.id:
            product = Product.objects.get(id=instance.product_id)
        instance.product.stock -= instance.quantity
        instance.product.save()
