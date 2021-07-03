from .models import Attendance_Log
from rest_framework import viewsets, permissions
from .serializers import Attendance_LogSerializer
from rest_framework import filters


class Attendance_LogViewSet(viewsets.ModelViewSet):
   
    queryset = Attendance_Log.objects.all()
    serializer_class = Attendance_LogSerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
 