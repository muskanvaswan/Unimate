# Generated by Django 3.2.7 on 2021-10-12 11:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='colleges',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('location', models.TextField()),
                ('rank', models.TextField()),
                ('reviews', models.TextField()),
                ('acc_rate', models.CharField(max_length=50)),
                ('deadlines', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='preferences',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country', models.CharField(max_length=20)),
                ('rank', models.IntegerField()),
                ('course', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='scores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SAT', models.IntegerField()),
                ('ACT', models.IntegerField()),
                ('GRE', models.IntegerField()),
                ('GMAT', models.IntegerField()),
                ('UG', models.IntegerField()),
                ('HS', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='tracker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('college', models.CharField(max_length=100)),
                ('deadlines', models.TextField()),
                ('completed', models.TextField()),
                ('criteria', models.TextField()),
            ],
        ),
    ]
