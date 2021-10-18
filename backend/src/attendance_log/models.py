from django.contrib.auth import login
from django.db import models
from django.contrib.auth.models import User
from knox.models import AuthToken
import datetime
from activities_log.models import Log_Activity
from django.db.models.signals import post_save,pre_delete
from django.dispatch import receiver
from django.utils import timezone
# Create your models here.
class Attendance_Log(models.Model):
    
    account = models.ForeignKey(
        User, related_name="user_accouunt_attendance_log", on_delete=models.CASCADE, null=True)
    login_at = models.DateTimeField(null=True)
    logout_at = models.DateTimeField(null=True)
    
    def __str__(self):
        return str(self.id)
    @staticmethod
    def save_log(account):
        activity_log = Log_Activity(
           account = account,
           login_at = datetime.datetime.now()
        )
        activity_log.save()
    @receiver(post_save, sender=AuthToken)
    def create_attendance_log(sender, instance, created, **kwargs):
	
	    if created:
		    Attendance_Log.objects.create(account=instance.user,login_at=datetime.datetime.now(),logout_at=None)

    # @receiver(pre_delete, sender=AuthToken)
    # def update_attendance_log(sender, instance, **kwargs):
    #     log = Attendance_Log.objects.get(account=instance.user,logout_at=None)
    #     log.logout_at = datetime.datetime.now()
    #     log.save()

 