# Generated by Django 3.2.6 on 2021-09-26 07:01

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('products', '0037_remove_product_stock'),
        ('reviews', '0002_auto_20210920_1130'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Reveiew',
            new_name='Review',
        ),
    ]
