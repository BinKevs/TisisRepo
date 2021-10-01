from django.db import models

# Create your models here.
class Product_variation(models.Model):
    # product = models.ForeignKey(
    #     "products.Product", related_name="product_variation", on_delete=models.CASCADE, null=True, blank=True)
    stock = models.IntegerField()
    size = models.CharField(max_length=150, null=True, blank=True)
    color = models.CharField(max_length=150, null=True, blank=True)
    weight = models.DecimalField(max_digits=20, decimal_places=2,null=True, blank=True)
    def __str__(self):
        return self.size + " " + self.color