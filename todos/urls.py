from django.conf.urls import url, include

from rest_framework import routers

from todos import views
from rest_auth.registration.views import VerifyEmailView

app_name = 'todos'

router = routers.SimpleRouter()
router.register(r'todolists', views.ToDoListViewSet)
router.register(r'task', views.TaskViewSet)
router.register(r'update_state', views.UpdateDoneViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^users/', include('users.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls'))
]
