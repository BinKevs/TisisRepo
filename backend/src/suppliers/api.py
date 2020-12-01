from suppliers.models import Supplier
from rest_framework import viewsets, permissions
from .serializers import SupplierSerializer

# Lead Viewset


class SupplierViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()

    # def get_queryset(self):
    #     return
    #     self.request.user.articles.all()
