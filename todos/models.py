from django.db import models
from users.models import User


class ToDoList(models.Model):
	created_by = models.ForeignKey(
		User, related_name='todo_lists', on_delete=models.CASCADE,
		blank=False, default=None)
	title = models.CharField(
		'title', max_length=255, blank=False, default=None)

	def __str__(self):
		return self.title


class Task(models.Model):
	title = models.CharField('title', max_length=100, blank=False, default=None)
	text = models.TextField('text', max_length=2000, null=True, blank=True)
	todolist = models.ForeignKey(
		ToDoList, related_name='tasks', on_delete=models.CASCADE, blank=False)
	deadline = models.DateTimeField(null=True, blank=True)
	is_done = models.BooleanField(default=False)
	users = models.ManyToManyField(User, blank=True)
	
	def __str__(self):
		return self.title
