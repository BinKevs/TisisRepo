# Generated by Django 3.2 on 2021-07-11 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance_log', '0003_alter_attendance_log_attendance_log_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance_log',
            name='attendance_log_id',
            field=models.CharField(default='None', max_length=255, null=True),
        ),
    ]
