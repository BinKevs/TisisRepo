# Generated by Django 3.2.6 on 2021-10-12 13:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('refunds', '0004_refund_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='refund',
            old_name='product_condition',
            new_name='product_condition_video',
        ),
    ]