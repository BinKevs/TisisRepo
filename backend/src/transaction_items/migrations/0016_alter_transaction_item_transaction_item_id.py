# Generated by Django 3.2 on 2021-07-11 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transaction_items', '0015_alter_transaction_item_transaction_item_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction_item',
            name='transaction_item_id',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
