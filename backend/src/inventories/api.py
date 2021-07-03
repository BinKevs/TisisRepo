from django.core.paginator import Page
from inventories.models import Inventory
from rest_framework import viewsets, permissions
from .serializers import InventorySerializer
from suppliers.models import Supplier
from products.models import Product
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
from activities_log.models import Log_Activity
from rest_framework.response import Response
from rest_framework import status
class InventoryViewSet(viewsets.ModelViewSet):
    
    queryset = Inventory.objects.all()
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['created_at'] 
    serializer_class = InventorySerializer
    # pagination_class = PageNumberPagination
    def create(self, request, *args, **kwargs):
        Log_Activity.save_log_activity(
                account=request.user,
                action_done = request.data['action_done'],
            )
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)