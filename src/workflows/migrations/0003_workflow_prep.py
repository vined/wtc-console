# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2018-07-27 12:35
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('workflows', '0002_auto_20180727_0856'),
    ]

    operations = [
        migrations.AddField(
            model_name='workflow',
            name='prep',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='workflows.Prep'),
        ),
    ]
