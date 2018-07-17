from django.db.utils import IntegrityError
from django.test import TestCase
from model_mommy import mommy
from todos import models


class TestToDoList(TestCase):

	def setUp(self):
		self.user = mommy.make('users.User', email='user@gmail.com')

	def test_creation_without_user(self):
		with self.assertRaises(IntegrityError):
			models.ToDoList.objects.create(title='Title')

	def test_creation_without_title(self):
		with self.assertRaises(IntegrityError):
			models.ToDoList.objects.create(user=self.user)

	def test_expected_creation(self):
		self.assertTrue(
			models.ToDoList.objects.create(user=self.user, title='Title'))


class TestTask(TestCase):

	def setUp(self):
		self.user = mommy.make('users.User', email='user@gmail.com')
		self.todo_list = mommy.make('todos.ToDoList', user=self.user, title='Title')

	def test_expected_creation(self):
		self.assertTrue(
			models.Task.objects.create(todolist=self.todo_list, title='Title'))

	def test_creation_without_todo_list(self):
		with self.assertRaises(IntegrityError):
			models.Task.objects.create(title='Title')

	def test_creation_without_title(self):
		with self.assertRaises(IntegrityError):
			models.Task.objects.create(todolist=self.todo_list)
