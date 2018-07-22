from rest_framework import serializers
from users.models import User
from django.contrib.auth import authenticate
from rest_auth.serializers import LoginSerializer 

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'name')

