from rest_framework import serializers
from .models import Reveiew


class ReveiewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reveiew
        fields = '__all__'
