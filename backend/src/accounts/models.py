from django.db import models
from addresses.models import Address
from contact_numbers.models import Contact_number
# Create your models here.
from django.contrib.auth.models import User



class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthdate = models.DateTimeField(null=True)
    address = models.OneToOneField(Address, related_name='account_address',on_delete=models.CASCADE,null=True, blank=True)
    contact_number = models.CharField(max_length=20, null=True)

