# Generated by Django 3.1.5 on 2021-01-18 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='supplier',
            name='phone_number',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
