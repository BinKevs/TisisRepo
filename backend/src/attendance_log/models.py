from django.contrib.auth import login
from django.db import models
from django.contrib.auth.models import User
from knox.models import AuthToken
import datetime
  
from django.db.models.signals import post_save,pre_delete
from django.dispatch import receiver
from django.utils import timezone
# Create your models here.
class Attendance_Log(models.Model):
    attendance_log_id = models.CharField(max_length=255, null=True, default=None)
    account = models.ForeignKey(
        User, related_name="user_accouunt_attendance_log", on_delete=models.CASCADE, null=True)
    login_at = models.DateTimeField(null=True)
    logout_at = models.DateTimeField(blank=True,null=True)
    def save(self,*args, **kwargs):
       if not self.attendance_log_id:
           prefix = 'AT-I{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(attendance_log_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().attendance_log_id[-4:]
              self.attendance_log_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.attendance_log_id = prefix+'{0:04d}'.format(1)
       super(Attendance_Log, self).save(*args, **kwargs)
    def __str__(self):
        return str(self.id)
    # @staticmethod
    # def save_log(account):
    #     activity_log = Activity_Log(
    #        account = account,
    #        login_at = datetime.datetime.now()
    #     )
    #     activity_log.save()
    # @receiver(post_save, sender=AuthToken)
    # def create_attendance_log(sender, instance, created, **kwargs):
	
	#     if created:
	# 	    Attendance_Log.objects.create(account=instance.user,login_at=datetime.datetime.now(),logout_at=None)

    # @receiver(pre_delete, sender=AuthToken)
    # def update_attendance_log(sender, instance, **kwargs):
    #     log = Attendance_Log.objects.get(account=instance.user,logout_at=None)
    #     log.logout_at = datetime.datetime.now()
    #     log.save()

 