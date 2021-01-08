# Generated by Django 3.1.3 on 2020-12-07 21:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('transactions', '0001_initial'),
        ('products', '0005_auto_20201208_0508'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction_item',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('product', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product_transaction_item_set', to='products.product')),
                ('transaction', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='transaction_set', to='transactions.transaction')),
            ],
        ),
    ]