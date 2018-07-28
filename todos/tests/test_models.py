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
			models.ToDoList.objects.create(created_by=self.user)

	def test_expected_creation(self):
		self.assertTrue(
			models.ToDoList.objects.create(created_by=self.user, title='Title'))


class TestTask(TestCase):

	def setUp(self):
		self.user = mommy.make('users.User', email='user@gmail.com')
		self.todo_list = mommy.make('todos.ToDoList', created_by=self.user, title='Title')

	def test_expected_creation(self):
		self.assertTrue(
			models.Task.objects.create(todolist=self.todo_list, title='Title'))

	def test_creation_without_todo_list(self):
		with self.assertRaises(IntegrityError):
			models.Task.objects.create(title='Title')

	def test_creation_without_title(self):
		with self.assertRaises(IntegrityError):
			models.Task.objects.create(todolist=self.todo_list)

	def test_assign(self):
		user = mommy.make('users.User', email='user1@gmail.com')	
		user_2 = mommy.make('users.User', email='user2@gmail.com')	
		task = models.Task.objects.create(
			todolist=self.todo_list,
			title='Title',
			assigned_to=user)
		task.save()
		self.assertEqual(task.assigned_to, user)
		task.assigned_to = user_2
		task.save()
		self.assertEqual(task.assigned_to, user_2)
