# Generated by Django 3.2.6 on 2021-09-16 06:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0038_remove_transaction_change'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='amount_tendered',
        ),
    ]
