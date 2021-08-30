from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Voucher(models.Model):
    code = models.CharField(max_length=255, null=True,blank=True)
    value = models.CharField(max_length=55, null=True,blank=True)
    created_at = models.DateTimeField(
        auto_now_add=True, blank=True)
    valid_till = models.DateTimeField(
       null=True, blank=True)
    claimed_date = models.DateTimeField(
       null=True, blank=True)
    claimed_by = models.ForeignKey(
        User, related_name="user_accouunt_voucher", on_delete=models.CASCADE, null=True,blank=True)