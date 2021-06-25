from .models import Attendance_Log
from rest_framework import viewsets, permissions
from .serializers import Attendance_LogSerializer


class Attendance_LogViewSet(viewsets.ModelViewSet):
   
    queryset = Attendance_Log.objects.all()
    serializer_class = Attendance_LogSerializer
 