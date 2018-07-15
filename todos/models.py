from django.db import models
from users.models import User
from todos.enums import TaskStatusEnum
from todos.enums import TASK_STATUS_CHOICES

class ToDoList(models.Model):
	user = models.ForeignKey(
		User, related_name='todo_lists', on_delete=models.CASCADE)
	title = models.CharField('title', max_length=255)

class Task(models.Model):
	title = models.CharField('title', max_length=255)
	text = models.TextField('text', max_length=2000, null=True, blank=True)
	todolist = models.ForeignKey(
		ToDoList, related_name='tasks', on_delete=models.CASCADE)
	deadline = models.DateField(null=True, blank=True)
	status = models.IntegerField(
		choices=TASK_STATUS_CHOICES, default=TaskStatusEnum.OPEN)

	def __str__(self):
		return self.title
