# Generated by Django 3.2.6 on 2021-09-04 15:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('products', '0033_remove_product_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product_variation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stock', models.IntegerField()),
                ('size', models.CharField(blank=True, max_length=150, null=True)),
                ('color', models.CharField(blank=True, max_length=150, null=True)),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_variation', to='products.product')),
            ],
        ),
    ]