from .models import Log_Activity
from rest_framework import viewsets, permissions
from .serializers import Log_ActivitySerializer

class  Log_ActivityViewSet(viewsets.ModelViewSet):
   
    queryset = Log_Activity.objects.all()
    serializer_class = Log_ActivitySerializer