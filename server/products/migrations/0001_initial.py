# Generated by Django 5.0.1 on 2024-01-19 03:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('desc', models.TextField()),
                ('price', models.IntegerField()),
                ('category', models.CharField(max_length=20)),
                ('image', models.ImageField(upload_to='uploads/images')),
            ],
        ),
    ]
