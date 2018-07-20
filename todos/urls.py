from django.conf.urls import url, include

from rest_framework import routers

from todos import views

app_name = 'todos'

router = routers.SimpleRouter()
router.register(r'todolist', views.ToDoListViewSet)
router.register(r'task', views.TaskViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]
