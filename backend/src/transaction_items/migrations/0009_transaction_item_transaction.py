# Generated by Django 3.1.3 on 2020-12-18 11:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0002_transaction_quantity'),
        ('transaction_items', '0008_remove_transaction_item_prod_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction_item',
            name='transaction',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='transaction_set', to='transactions.transaction'),
        ),
    ]