# Generated by Django 3.2.3 on 2021-07-11 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0020_alter_transaction_transaction_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='mode_of_payment',
            field=models.CharField(default='Cash', max_length=255),
            preserve_default=False,
        ),
    ]
