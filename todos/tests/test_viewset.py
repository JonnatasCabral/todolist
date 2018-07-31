from unittest.mock import MagicMock

from django.http import Http404
from django.test import TestCase

from model_mommy import mommy

from todos.models import ToDoList, Task
from todos.views import ToDoListViewSet, TaskViewSet


class TestViewSetMixin(object):
    model =  None
    view_set = None
    user_kwarg = None

    def setUp(self):
        self.user = mommy.make('users.User')
        self.view = self.view_set()  # pylint: disable=not-callable
        self.todolists = mommy.make(
            ToDoList, _quantity=10, title='title', created_by=self.user
        )

        self.tasks = list(map(lambda x: mommy.make(Task, title='title', todolist=x), self.todolists)) 

    def test_get_queryset(self):
        self.view.request = MagicMock()
        self.view.request.user = self.user
        self.assertEqual(
            list(self.view.get_queryset()),
            list(self.model.objects.filter(**{self.kwarg: self.user}))
        )


class TestTodoListViewSet(TestViewSetMixin, TestCase):
    model = ToDoList
    view_set = ToDoListViewSet
    kwarg =  'created_by'


class TestTodoListViewSet(TestViewSetMixin, TestCase):
    model = Task
    view_set = TaskViewSet
    kwarg =  'todolist__created_by'

