from django.db import models

# Create your models here.
class Contact_number(models.Model):
    phone_number = models.CharField(max_length=20, null=True)
    