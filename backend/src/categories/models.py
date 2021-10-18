from django.db import models
from django.utils import timezone
# Create your models here.


class Category(models.Model):
  
    name = models.CharField(max_length=100, unique=True)
   
    def __str__(self):
        return self.name
