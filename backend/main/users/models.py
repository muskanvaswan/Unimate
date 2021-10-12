from django.db import models

class user(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=30)
    location = models.TextField()
    phone = models.BigIntegerField()

class scores(models.Model):
    SAT= models.IntegerField()
    ACT= models.IntegerField()
    GRE=models.IntegerField()
    GMAT=models.IntegerField()
    UG=models.IntegerField()
    HS=models.IntegerField()

class colleges(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    location = models.TextField()
    rank = models.TextField()
    reviews = models.TextField()
    acc_rate = models.CharField(max_length=50)
    deadlines = models.TextField()

class tracker(models.Model):
    college = models.CharField(max_length=100)
    deadlines = models.TextField()
    completed = models.TextField()
    criteria = models.TextField()

class preferences(models.Model):
    country = models.CharField(max_length=20)
    rank = models.IntegerField()
    course = models.TextField()