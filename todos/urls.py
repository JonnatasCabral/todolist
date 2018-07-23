from django.conf.urls import url, include

from rest_framework import routers

from todos import views

app_name = 'todos'

router = routers.SimpleRouter()
router.register(r'todolists', views.ToDoListViewSet)
router.register(r'task', views.TaskViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^users/', include('users.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
]
