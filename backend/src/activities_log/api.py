from .models import Log_Activity
from rest_framework import viewsets, permissions
from .serializers import Log_ActivitySerializer
from rest_framework import filters

class  Log_ActivityViewSet(viewsets.ModelViewSet):
   
    queryset = Log_Activity.objects.all()
    serializer_class = Log_ActivitySerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]