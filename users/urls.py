from django.conf.urls import include, url

from . import views

app_name = 'users'

urlpatterns = [
    url(r'^', views.UserListViewSet.as_view()),
]