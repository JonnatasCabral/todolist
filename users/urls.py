from django.conf.urls import include, url

from . import views

urlpatterns = [
    url(r'^', views.UserListView.as_view()),
]