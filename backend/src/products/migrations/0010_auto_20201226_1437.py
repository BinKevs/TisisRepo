# Generated by Django 3.1.3 on 2020-12-26 06:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0009_auto_20201222_2310'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='stock',
            field=models.IntegerField(),
        ),
    ]
