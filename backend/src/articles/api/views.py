# from rest_framework.generics import (ListAPIView,
#                                     RetrieveAPIView ,
#                                     CreateAPIView,
#                                     UpdateAPIView,
#                                     DestroyAPIView)
# from articles.models import Article
# from .serializers import ArticleSerializer

# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleUpdateView(UpdateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer

# class ArticleDeleteView(DestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
from articles.models import Article
from rest_framework import viewsets, permissions
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Article.objects.all()
    # def get_queryset(self):
    #     return
    #     self.request.user.articles.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
