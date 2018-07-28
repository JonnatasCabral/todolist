from django.test import TestCase
from users.serializers import UserSerializer


class TestUserSerializer(TestCase):

	def setUp(self):
		self.serializer_class = UserSerializer

	def  test_is_valid(self):
		payload = {
			'id': 1,
			'email': 'test@gmail.com',
			'username':	'user'	}
		serializer = self.serializer_class(data=payload)
		self.assertTrue(serializer.is_valid())

	def test_invalid_values(self):
		payload = {
			'id': 1,
			'email': 'incorrect_email_format',
			'username':	'test user'	}
		serializer = self.serializer_class(data=payload)
		self.assertFalse(serializer.is_valid())
