# Generated by Django 3.2.6 on 2021-08-24 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0028_auto_20210822_2233'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='status',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
