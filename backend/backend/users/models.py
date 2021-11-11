from django.db import models
from django.contrib.auth.models import User

class College(models.Model):
    world_rank = models.IntegerField()
    name = models.CharField(max_length=120)
    country = models.CharField(max_length=120)
    teaching = models.DecimalField(max_digits=19, decimal_places=10)
    international = models.DecimalField(max_digits=19, decimal_places=10)
    research = models.DecimalField(max_digits=19, decimal_places=10)
    citations = models.DecimalField(max_digits=19, decimal_places=10)
    income = models.DecimalField(max_digits=19, decimal_places=10)
    total_score = models.DecimalField(max_digits=19, decimal_places=10)
    num_students = models.IntegerField()
    description = models.CharField(max_length=1000, null=True)
    url = models.CharField(max_length=600, null=True)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    colleges = models.ManyToManyField(College,  related_name="colleges")
    sat_score = models.IntegerField(null=True)

class Deadline(models.Model):
    date = models.DateTimeField()
    title = models.CharField(max_length=200)
    status = models.BooleanField(default=False)

class Tracker(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tracker")
    college = models.ForeignKey(College, on_delete=models.CASCADE, related_name="tracker")
    deadline = models.ManyToManyField(Deadline, related_name="deadlines")

    class Meta:
        unique_together = ('user', 'college')
