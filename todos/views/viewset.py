from rest_framework import viewsets
from rest_framework import mixins

from todos import serializers
from todos import models 


class ToDoListViewSet(viewsets.ModelViewSet):
    queryset = models.ToDoList.objects.all()
    serializer_class = serializers.ToDoListSerializer

    def perform_create(self, serializer):
        serializer.validated_data['created_by'] = self.request.user
        return super(ToDoListViewSet, self).perform_create(serializer)



class TaskViewSet(mixins.CreateModelMixin, mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin, mixins.DestroyModelMixin,
                  viewsets.GenericViewSet):
    queryset = models.Task.objects.all()
    serializer_class = serializers.TaskSerializer

