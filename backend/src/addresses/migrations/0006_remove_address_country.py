# Generated by Django 3.2.6 on 2021-10-04 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('addresses', '0005_auto_20211004_2206'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='address',
            name='country',
        ),
    ]
