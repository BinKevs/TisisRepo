# Generated by Django 3.2 on 2021-07-11 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventories', '0006_alter_inventory_inventory_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='inventory_id',
            field=models.CharField(max_length=255),
        ),
    ]
