from django.db import models
from suppliers.models import Supplier
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from categories.models import Category
from django_resized import ResizedImageField

class Product(models.Model):
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
