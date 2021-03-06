# Generated by Django 3.2.3 on 2021-07-11 15:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('transactions', '0021_alter_transaction_mode_of_payment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='creator',
            field=models.ForeignKey(default=2, on_delete=django.db.models.deletion.CASCADE, related_name='creator_transaction', to='auth.user'),
            preserve_default=False,
        ),
    ]
