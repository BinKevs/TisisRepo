
from .models import Reveiew
from rest_framework import viewsets, permissions
from .serializers import ReveiewSerializer
from rest_framework.response import Response
from rest_framework import status

class ReviewViewSet(viewsets.ModelViewSet):
    
    queryset = Reveiew.objects.all()
    serializer_class = ReveiewSerializer
