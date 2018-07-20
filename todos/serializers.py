from rest_framework import serializers
from todos import models

class ToDoListSerializer(serializers.ModelSerializer):

	class Meta:
		model = models.ToDoList
		fields = ('title', 'user')



class TaskSerializer(serializers.ModelSerializer):

    title = serializers.CharField(
        max_length=100, allow_blank=False, required=True
    )
    deadline = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S")

    class Meta:
        model = models.Task
        fields = ('title', 'todolist', 'deadline', 'done')