# Generated by Django 3.2.6 on 2021-10-14 03:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('refunds', '0007_refund_response'),
    ]

    operations = [
        migrations.AlterField(
            model_name='refund',
            name='status',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]