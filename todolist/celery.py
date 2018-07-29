# coding: utf-8

from __future__ import absolute_import

import os

from django.apps import apps
from celery.schedules import crontab
from celery import Celery


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "todolist.settings.local")

app = Celery('todolist_tasks')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])


app.conf.beat_schedule = {
    'send-report-every-day': {
        'task': 'todos.tasks.send_reports',
        'schedule': crontab(hour=0, minute=30)
    },
}
app.conf.timezone = 'America/Recife'