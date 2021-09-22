from rest_framework import serializers
from .models import Contact_number

class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact_number
        fields = '__all__'
        