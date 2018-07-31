from django.conf import settings
from django.conf.urls import include, url  # noqa
from django.contrib import admin
from django.views.generic import TemplateView

import django_js_reverse.views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^jsreverse/$', django_js_reverse.views.urls_js, name='js_reverse'),
    
    url(r'^api/v1/users/', include('users.urls', namespace='users')),
    url(r'^api/v1/', include('todos.urls', namespace='todos')),
    url(r'^', TemplateView.as_view(template_name='home.html'), name='home')
]

