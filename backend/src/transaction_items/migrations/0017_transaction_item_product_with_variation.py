# Generated by Django 3.2.6 on 2021-09-06 04:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product_variations', '0001_initial'),
        ('transaction_items', '0016_alter_transaction_item_transaction_item_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction_item',
            name='product_with_variation',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_with_variation_transaction_set', to='product_variations.product_variation'),
        ),
    ]