# Generated by Django 3.2.6 on 2021-08-29 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0032_rename__transaction_id_onlinetransaction_transaction'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='shipping_details',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='transaction',
            name='status',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.DeleteModel(
            name='OnlineTransaction',
        ),
    ]
