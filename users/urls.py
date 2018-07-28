from django.conf.urls import include, url

from . import views

app_name = 'users'

urlpatterns = [
    url(r'^register/', views.UserCreateViewSet.as_view()),
    url(r'^list/', views.UserListViewSet.as_view()),
]