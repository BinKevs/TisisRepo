# Generated by Django 3.2.6 on 2021-08-28 13:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0031_rename_transaction_onlinetransaction__transaction_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='onlinetransaction',
            old_name='_transaction_id',
            new_name='transaction',
        ),
    ]