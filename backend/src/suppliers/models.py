from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from categories.models import Category
import random
from django.utils import timezone

# Create your models here.


class Supplier(models.Model):
    supplier_id = models.CharField(max_length=255, null=False, default="None")
    name = models.CharField(max_length=100, unique=True)
    address = models.CharField(max_length=300, unique=True)
    phone_number = models.CharField(max_length=100,null=False, blank=False, unique=True)

    def save(self,*args, **kwargs):
       if not self.supplier_id:
           prefix = 'SI{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(supplier_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().supplier_id[-4:]
              self.supplier_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.supplier_id = prefix+'{0:04d}'.format(1)
       super(Supplier, self).save(*args, **kwargs)
    def __str__(self):
        return self.name
    