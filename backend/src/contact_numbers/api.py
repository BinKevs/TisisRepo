from .models import Contact_number
from .serializers import ContactSerializer
from rest_framework import viewsets, permissions

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact_number.objects.all()
    serializer_class = ContactSerializer
 