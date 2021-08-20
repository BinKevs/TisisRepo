# Generated by Django 3.2 on 2021-08-12 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product_files', '0007_remove_product_file_product'),
        ('products', '0023_remove_product_file_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='file_content',
            field=models.ManyToManyField(blank=True, null=True, related_name='file_content', to='product_files.Product_file'),
        ),
    ]
