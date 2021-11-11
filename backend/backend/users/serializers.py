# backend/api/serializers.py

from django.contrib.auth import get_user_model
from rest_framework import serializers
from .models import College, Profile, Deadline, Tracker

class CreateUserSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True,
                                     style={'input_type': 'password'})

    class Meta:
        model = get_user_model()
        fields = ('username', 'password', 'first_name', 'last_name')
        write_only_fields = ('password')
        read_only_fields = ('is_staff', 'is_superuser', 'is_active',)

    def create(self, validated_data):
        user = super(CreateUserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    colleges = CollegeSerializer(read_only=True, many=True)

    class Meta:
        model = Profile
        fields = '__all__'

class DeadlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deadline
        fields = '__all__'

class TrackerSerializer(serializers.ModelSerializer):
    deadline = DeadlineSerializer(read_only=True, many=True)
    college = CollegeSerializer(read_only=True)

    class Meta:
        model = Tracker
        fields = ['deadline', 'college']
