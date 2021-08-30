# Generated by Django 3.2.6 on 2021-08-25 12:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0028_alter_onlinetransaction_transaction'),
    ]

    operations = [
        migrations.AlterField(
            model_name='onlinetransaction',
            name='shipping_details',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='onlinetransaction',
            name='status',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='onlinetransaction',
            name='transaction',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='online_transaction', to='transactions.transaction'),
        ),
    ]
