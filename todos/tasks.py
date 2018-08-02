import datetime
from django.core.mail import EmailMessage
from django.db.models import Prefetch
from users.models import User
from todos.models import Task
from todolist.celery import app


def crete_email(tasks, user):
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
def send_email(user_id, start_date, end_date):
    user = User.objects.get(id=user_id)
    import ipdb; ipdb.set_trace()
    tasks = user.tasks.filter(deadline__range=(start_date, end_date))
    email = crete_email(tasks, user)

    email.send()

    return email


@app.task
def send_reports():
    start_date = datetime.datetime.today() - datetime.timedelta(1)
    end_date = start_date + datetime.timedelta(days=1)
    users = User.objects.filter(
        tasks__isnull=False, tasks__deadline__range=(start_date, end_date))
    
    for user in users:
        send_email.delay(user.id, start_date,end_date)
