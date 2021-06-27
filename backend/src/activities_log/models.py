from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
class Log_Activity(models.Model):
    activity_log_id = models.CharField(max_length=255, null=True, default=None)
    account = models.ForeignKey(
        User, related_name="user_accouunt_activity_log", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True,null=True)
    action_done = models.CharField(max_length=200,null=True)
    def save(self,*args, **kwargs):
       if not self.activity_log_id:
           prefix = 'AC-I{}-{}-'.format(timezone.now().strftime('%y'),timezone.now().strftime('%m%d'))
           print(prefix)
           prev_instances = self.__class__.objects.filter(activity_log_id__contains=prefix)
           if prev_instances.exists():
              last_instance_id = prev_instances.last().activity_log_id[-4:]
              self.activity_log_id = prefix+'{0:04d}'.format(int(last_instance_id)+1)
           else:
               self.activity_log_id = prefix+'{0:04d}'.format(1)
       super(Log_Activity, self).save(*args, **kwargs)
    def __str__(self):
        return str(self.id)
    @staticmethod
    def save_log_activity(account, action_done):
        log_activity = Log_Activity(
            account = account,
            action_done = action_done,
        )
        log_activity.save()