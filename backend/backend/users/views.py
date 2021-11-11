# backend/api/views.py

from django.contrib.auth import get_user_model
from rest_framework.generics import CreateAPIView, ListCreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework import status
from rest_framework.views import APIView
from users.serializers import CreateUserSerializer, CollegeSerializer, ProfileSerializer, TrackerSerializer
from .models import College, Profile, Deadline, Tracker
from rest_framework.permissions import AllowAny
from django.forms.models import model_to_dict

class CreateUserAPIView(CreateAPIView):
    serializer_class = CreateUserSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        # We create a token than will be used for future auth
        token = Token.objects.create(user=serializer.instance)
        profile = Profile.objects.create(user=serializer.instance)
        token_data = {"token": token.key}
        return Response(
            {**serializer.data, **token_data},
            status=status.HTTP_201_CREATED,
            headers=headers
        )


class LogoutUserAPIView(APIView):
    queryset = get_user_model().objects.all()

    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

class CollegeList(ListCreateAPIView):
    queryset = College.objects.all().order_by('?')
    serializer_class = CollegeSerializer
    permission_classes = [AllowAny]

class ProfileView(APIView):
    queryset = Profile.objects.all()

    def get(self, request):
        data = ProfileSerializer(request.user.profile)
        print(request.user)
        return Response(data.data)

class AddCollegeView(APIView):

    def get(self, request, college_id = 1):
        college = College.objects.get(pk=college_id)
        profile = request.user.profile
        profile.colleges.add(college)
        profile.save()

        return Response(status=200)

class RemoveCollegeView(APIView):

    def get(self, request, college_id = 1):
        college = College.objects.get(pk=college_id)
        profile = request.user.profile
        profile.colleges.remove(college)
        profile.save()

        return Response(status=200)

class DeadlineView(APIView):

    def post(self, request, college_id):
        college = College.objects.get(pk=college_id)
        user = request.user

        if college in user.colleges:
            data = request.data
            deadline = Deadline(date=data['date'], title=data['title'])
            deadline.save()

            tracker = Tracker.objects.get_or_create(user=user, college=college)[0]
            tracker.deadline.add(deadline)
            tracker.save()

        return Response(status=200)

    def get(self, request, college_id):
        college = College.objects.get(pk=college_id)
        user = request.user

        tracker = Tracker.objects.get(user=user, college=college)

        return Response(TrackerSerializer(tracker).data)

class DeadlineStatusUpdateView(APIView):

    def post(self, request, deadline_id):
        deadline = Deadline.objects.get(pk=deadline_id)
        deadline.status = bool(request.data['status'])
        deadline.save()

        return Response(status=200)

class DeadlineDelete(APIView):

    def get(self, post, deadline_id):
        deadline = Deadline.objects.get(pk=deadline_id)
        deadline.delete()

        return Response(status=200)
