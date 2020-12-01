from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    owner = models.ForeignKey(
        User, related_name="articles", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title
