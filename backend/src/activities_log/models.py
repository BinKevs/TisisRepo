from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
class Log_Activity(models.Model):

    account = models.ForeignKey(
        User, related_name="user_accouunt_activity_log", on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True,null=True)
    action_done = models.CharField(max_length=200,null=True)
   
    def __str__(self):
        return str(self.id)
    @staticmethod
    def save_log_activity(account, action_done):
        log_activity = Log_Activity(
            account = account,
            action_done = action_done,
        )
        log_activity.save()