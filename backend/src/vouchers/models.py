from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Voucher(models.Model):
    code = models.CharField(max_length=255, null=True,blank=True)
    value = models.CharField(max_length=55, null=True,blank=True)
    created_at = models.DateTimeField(
        auto_now_add=True, blank=True)
    status =  models.BooleanField(default=True)