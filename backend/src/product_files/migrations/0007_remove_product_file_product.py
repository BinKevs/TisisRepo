# Generated by Django 3.2 on 2021-08-12 11:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product_files', '0006_product_file_product'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product_file',
            name='product',
        ),
    ]
