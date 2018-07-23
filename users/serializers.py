from django.contrib.auth import authenticate
from rest_framework import serializers
from rest_auth.serializers import LoginSerializer 

from users.models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'name')

