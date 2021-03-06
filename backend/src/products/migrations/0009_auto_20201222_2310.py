# Generated by Django 3.1.3 on 2020-12-22 15:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('suppliers', '0001_initial'),
        ('categories', '0001_initial'),
        ('products', '0008_auto_20201210_1701'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='category_product', to='categories.category'),
        ),
        migrations.AddField(
            model_name='product',
            name='supplier',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='supplier_product', to='suppliers.supplier'),
        ),
    ]
