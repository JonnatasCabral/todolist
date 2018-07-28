from rest_framework import serializers
from todos import models
from users.serializers import UserSerializer
from users.models import User

class TaskSerializer(serializers.ModelSerializer):

    title = serializers.CharField(
        max_length=100, allow_blank=False, required=True
    )
    deadline = serializers.DateTimeField(
        format="%Y-%m-%d %H:%M:%S",
        required=False)
    assigned_to = UserSerializer(required=False)
    assigned_to_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(), write_only=True, required=False)

    def validate(self, data):
        data['assigned_to'] = data.pop('assigned_to_id', None)
        return data

    class Meta:
        model = models.Task
        fields = (
            'id', 'title','text', 'todolist', 'deadline',
            'is_done', 'assigned_to_id', 'assigned_to'
        )


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