from categories.models import Category
from rest_framework import viewsets, permissions
from .serializers import CategorySerializer
# from suppliers.models import Supplier


class CategoryViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    # def perform_create(self, serializer):
    #     serializer.save(supplier=Supplier.objects.get(
    #         pk=self.request.data.get('supplier')))
    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
