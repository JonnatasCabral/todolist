from rest_framework import serializers
from todos import models
from users.serializers import UserSerializers


class ToDoListSerializer(serializers.ModelSerializer):

    created_by = UserSerializers(read_only=True)
    
    class Meta:
        model = models.ToDoList
        fields = ('id', 'title', 'created_by')


class TaskSerializer(serializers.ModelSerializer):

    title = serializers.CharField(
        max_length=100, allow_blank=False, required=True
    )
    deadline = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")
    users = UserSerializers(many=True, read_only=True)

    class Meta:
        model = models.Task
        fields = ('id', 'title', 'todolist', 'deadline', 'is_done', 'users')