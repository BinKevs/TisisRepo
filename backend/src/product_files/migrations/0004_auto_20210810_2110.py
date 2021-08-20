# Generated by Django 3.2 on 2021-08-10 13:10

from django.db import migrations, models
import django.db.models.deletion
import django_resized.forms


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0021_remove_product_file_content'),
        ('product_files', '0003_auto_20210810_1839'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product_file',
            name='media',
        ),
        migrations.AddField(
            model_name='product_file',
            name='image',
            field=django_resized.forms.ResizedImageField(blank=True, crop=['middle', 'center'], default='No-Image-Available.jpeg', force_format=None, keep_meta=True, null=True, quality=0, size=[1200, 820], upload_to=''),
        ),
        migrations.AddField(
            model_name='product_file',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_file_set', to='products.product'),
        ),
    ]
