# Generated by Django 3.2 on 2021-04-10 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0008_alter_transaction_change'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='change',
            field=models.DecimalField(decimal_places=2, max_digits=12),
        ),
    ]
