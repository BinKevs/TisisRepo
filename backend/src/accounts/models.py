from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Address(models.Model):
    detailed_address = models.CharField(max_length=1200, null=True)
    baranggay = models.CharField(max_length=300, null=True)
    city = models.CharField(max_length=300, null=True)
    province = models.CharField(max_length=300, null=True)
    region = models.CharField(max_length=300, null=True)

class Contact_number(models.Model):
    phone_number = models.CharField(max_length=20, null=True)
    
class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthdate = models.DateTimeField(null=True)
    address_id = models.ManyToManyField(Address, related_name='account_address', blank=True)
    contact_number_id = models.ManyToManyField(Address, related_name='account_contact_number', blank=True)
    
