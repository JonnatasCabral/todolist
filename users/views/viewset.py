from rest_framework import generics

from users import models
from users import serializers

class UserListViewSet(generics.ListCreateAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer