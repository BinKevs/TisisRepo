from django.db import models
from django.utils import timezone
# Create your models here.


class Category(models.Model):
    category_id = models.CharField(max_length=255, null=True, default=None)
    name = models.CharField(max_length=100, unique=True)
    def save(self,*args, **kwargs):
       if not self.category_id:
           prefix = 'CI{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(category_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().category_id[-4:]
              self.category_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.category_id = prefix+'{0:04d}'.format(1)
       super(Category, self).save(*args, **kwargs)
    def __str__(self):
        return self.name
