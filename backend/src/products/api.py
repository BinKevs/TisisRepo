from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
from inventories.models import Inventory
from suppliers.models import Supplier
from rest_framework import filters
from activities_log.models import Log_Activity
from rest_framework.response import Response
from rest_framework import status
class ProductViewSet(viewsets.ModelViewSet):
    
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
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
