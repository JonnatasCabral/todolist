from django.test import TestCase
from users.serializers import UserSerializer


class TestUserSerializer(TestCase):

	def setUp(self):
		self.serializer_class = UserSerializer

	def  test_is_valid(self):
		payload = {
			'id': 1,
			'email': 'test@gmail.com',
			'name':	'test user'	}
		serializer = self.serializer_class(data=payload)
		self.assertTrue(serializer.is_valid())

	def test_invalid_email(self):
		payload = {
			'id': 1,
			'email': 'incorrect_email_format',
			'name':	'test user'	}
		serializer = self.serializer_class(data=payload)
		self.assertFalse(serializer.is_valid())
