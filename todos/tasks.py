import datetime
from django.core.mail import EmailMessage
from django.db.models import Prefetch
from users.models import User
from todos.models import Task
from todolist.celery import app


def crete_email(task):
    body = "You have some task to work today."
    for task in tasks:
        
        body +='\n\n Task: {title} \n Deadline: {deadline}'.format(
            title=task.title,
            deadline=task.deadline
            )

    return EmailMessage(
        'Web App Todo List Report',
        body,
        'todolist@report.com',
        to=[user.email]) 

@app.task
def send_email(user):
    tasks = user.objects.tasks.all()
    email = crete_email(tasks)

    email.send()

    return email


@app.task
def send_reports():
    start = datetime.datetime.today() - datetime.timedelta(1)
    end = start + datetime.timedelta(days=1)

    users = User.objects.prefetch_related(
      Prefetch(
        'tasks',
        queryset=Task.objects.filter(deadline__range=(start, end))
      )
    )
    for user in users:
        send_email.delay(user)
