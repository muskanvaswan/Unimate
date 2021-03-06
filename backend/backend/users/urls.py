# backend/api/urls.py

from django.conf.urls import url
from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views


urlpatterns = [
    url(r'^auth/login/$',
        obtain_auth_token,
        name='auth_user_login'),
    url(r'^auth/register/$',
        views.CreateUserAPIView.as_view(),
        name='auth_user_create'),
    url(r'^auth/logout/$',
        views.LogoutUserAPIView.as_view(),
        name='auth_user_logout'),
    path('colleges/', views.CollegeList.as_view(), name="colleges"),
    path('profile/', views.ProfileView.as_view(), name="profile"),
    path('college/add/<int:college_id>/', views.AddCollegeView.as_view(), name="add"),
    path('college/delete/<int:college_id>/', views.RemoveCollegeView.as_view(), name="delete"),
    path('deadline/<int:college_id>/', views.DeadlineView.as_view(), name="deadline"),
    path('status/<int:deadline_id>/', views.DeadlineStatusUpdateView.as_view(), name="status_deadline"),
    path('deadline/delete/<int:deadline_id>/', views.DeadlineDelete.as_view(), name="delete_deadline"),
    path('deadlines/', views.UserTrackerList.as_view(), name="trackers"),
    path('tracker/', views.UserTrackerStats.as_view(), name="trackers"),
]
