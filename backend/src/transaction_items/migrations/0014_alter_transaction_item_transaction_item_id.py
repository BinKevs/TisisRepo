# Generated by Django 3.2 on 2021-07-07 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction_items', '0013_transaction_item_transaction_item_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction_item',
            name='transaction_item_id',
            field=models.CharField(default='None', max_length=255),
        ),
    ]
