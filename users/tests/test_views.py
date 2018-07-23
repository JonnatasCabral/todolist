from unittest.mock import MagicMock

from django.http import Http404
from django.test import TestCase

from model_mommy import mommy
from users.views import UserListView
from users.models import User


class TestUserViewSet(TestCase):

    def setUp(self):
        self.users = mommy.make('users.User', _quantity=10)
        self.view = UserListView()

    def test_get_queryset(self):
        self.assertEqual(
            list(self.view.get_queryset()),
            list(User.objects.filter())
        )
