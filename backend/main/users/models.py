from django.db import models

class user(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=30)
    location = models.TextField()
    phone = models.BigIntegerField()

    