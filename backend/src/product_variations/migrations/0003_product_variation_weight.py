# Generated by Django 3.2.6 on 2021-10-01 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_variations', '0002_remove_product_variation_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product_variation',
            name='weight',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True),
        ),
    ]