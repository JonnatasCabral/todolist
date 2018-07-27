from rest_framework import serializers
from todos import models
from users.serializers import UserSerializer

class TaskSerializer(serializers.ModelSerializer):

    title = serializers.CharField(
        max_length=100, allow_blank=False, required=True
    )
    deadline = serializers.DateTimeField(
        format="%Y-%m-%d %H:%M:%S",
        required=False)
    assigned_to = UserSerializer(required=False)

    class Meta:
        model = models.Task
        fields = ('id', 'title', 'todolist', 'deadline', 'is_done', 'assigned_to')


class ToDoListSerializer(serializers.ModelSerializer):

    created_by = UserSerializer(
        read_only=True, 
        default=serializers.CurrentUserDefault())
    tasks = serializers.SerializerMethodField()

    def get_tasks(self, obj):

        tasks = models.Task.objects.filter(todolist_id=obj.id)

        serializer = TaskSerializer(tasks, many=True)
        return serializer.data

    class Meta:
        model = models.ToDoList
        fields = ('id', 'title', 'created_by', 'tasks')