# Generated by Django 3.2.6 on 2021-08-25 04:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20210820_0209'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='contact_number_id',
            field=models.ManyToManyField(blank=True, related_name='account_contact_number', to='accounts.Contact_number'),
        ),
    ]
