from rest_framework import serializers
from .models import Product_variation

class Product_VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product_variation
        fields = '__all__'