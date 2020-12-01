from rest_framework import serializers
from articles.models import Article
from accounts.serializers import UserSerializer


class ArticleSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Article
        fields = '__all__'
