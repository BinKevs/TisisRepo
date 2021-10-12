from django.db import models

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=300, null=True)
    barangay = models.CharField(max_length=300, null=True)
    city = models.CharField(max_length=300, null=True)
    province = models.CharField(max_length=300, null=True)
    region = models.CharField(max_length=300, null=True)
  
    barangay_code = models.CharField(max_length=300, null=True)
    city_code = models.CharField(max_length=300, null=True)
    province_code = models.CharField(max_length=300, null=True)
    region_code = models.CharField(max_length=300, null=True)
    
    def __str__(self):
        return self.street + " " +self.barangay + " " + self.city + " " + self.province + " "+ self.region


