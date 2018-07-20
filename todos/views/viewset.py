from rest_framework import viewsets
from todos.models import ToDoList
from todos.serializers import ToDoListSerializer


class ToDoListViewSet(viewsets.ModelViewSet):
    queryset = ToDoList.objects.all()
    serializer_class = ToDoListSerializer
