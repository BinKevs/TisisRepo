# Generated by Django 3.2 on 2021-07-07 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0017_transaction_mode_of_payment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='transaction_id',
            field=models.CharField(default='None', max_length=255),
        ),
    ]
