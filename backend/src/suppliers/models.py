from django.db import models
from categories.models import Category
import random
from django.utils import timezone

# Create your models here.


class Supplier(models.Model):
    
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=300, unique=True)
    phone_number = models.CharField(max_length=100,null=False, blank=False, unique=True)
    status = models.BooleanField(default=True)
    
   
    def __str__(self):
        return self.name
    