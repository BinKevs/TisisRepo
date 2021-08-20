# Generated by Django 3.2 on 2021-08-12 11:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0023_remove_product_file_content'),
        ('product_files', '0005_remove_product_file_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product_file',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_file_set', to='products.product'),
        ),
    ]
