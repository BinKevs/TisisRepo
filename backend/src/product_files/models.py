from django.db import models
from rest_framework.parsers import MultiPartParser, FormParser
# from products.models import Product
from django_resized import ResizedImageField
from rest_framework.decorators import  parser_classes
class Product_file(models.Model):
    # product = models.ForeignKey(
    #     Product, related_name="product_file_set", on_delete=models.CASCADE, null=True,blank=True)
    image = ResizedImageField(size=[1200,820],crop=['middle', 'center'], default='No-Image-Available.jpeg',null=True, blank=True)
    # media = models.FileField(null=True, blank=True)
    # @staticmethod
    # def save_product_file(image):
    #     i = 0
    #     while i < len(image):
    #         product_file = Product_file(
    #             product = Product.objects.all().order_by('id').reverse()[0],
    #             image = image[i],
    #         )
    #         product_file.save()
    #         i += 1
