from django.test import TestCase
from model_mommy import mommy
from unittest.mock import MagicMock

from todos.serializers import TaskSerializer
from todos.serializers import ToDoListSerializer


class TestTaskSerializer(TestCase):

	def setUp(self):
		self.serializer_class = TaskSerializer
		self.user = mommy.make('users.User')
		self.todolist = mommy.make(
			'todos.ToDoList', title='Title TodoList',
			created_by=self.user)

	def  test_is_valid(self):
		payload = {
			'title':'Title Task',
			'todolist':self.todolist.id,
			}
		serializer = self.serializer_class(data=payload)

		self.assertTrue(serializer.is_valid())

class TestToDoListSerializer(TestCase):

	def setUp(self):
		self.serializer_class = ToDoListSerializer
		self.user = mommy.make('users.User')

	def  test_is_valid(self):
		request = MagicMock()
		request.user = self.user
		context = {
			'request': request
		}
		payload = {
			'title':'Title Todolist',
			}
		serializer = self.serializer_class(data=payload, context=context)
		self.assertTrue(serializer.is_valid())

	def  test_without_user_in_context(self):
		request = MagicMock()
		request.user = None
		context = {
			'request': request
		}
		payload = {
			'title':'Title Todolist',
			}
		with self.assertRaises(KeyError) as raises:
			self.serializer_class(data=payload).is_valid()

