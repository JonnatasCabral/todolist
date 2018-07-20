from rest_framework import serializers
from todos.models import ToDoList, Task

class ToDoListSerializer(serializers.ModelSerializer):

	class Meta:
		model = ToDoList
		fields = ('title', 'user')