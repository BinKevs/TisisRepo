from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from categories.models import Category

# Create your models here.


class Supplier(models.Model):
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=300, unique=True)
    phone_number = PhoneNumberField(null=False, blank=False, unique=True)

    def __str__(self):
        return self.name
