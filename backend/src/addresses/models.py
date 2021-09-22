from django.db import models

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=300, null=True)
    city_town = models.CharField(max_length=300, null=True)
    state_province_area = models.CharField(max_length=300, null=True)
    country= models.CharField(max_length=300, null=True)