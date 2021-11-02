from .models import Voucher
from rest_framework import viewsets, permissions
from .serializers import VoucherSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework import filters
# from suppliers.models import Supplier


class VoucherViewSet(viewsets.ModelViewSet):
    
    queryset = Voucher.objects.all()
    serializer_class = VoucherSerializer
    ordering_fields = ['created_at'] 
    filter_backends = [filters.OrderingFilter]
    def update(self,request,pk,*args,**kwargs):
        voucher = Voucher.objects.get(pk=pk)
        data = request.data
        voucher.code = data.get("code",voucher.code)
        voucher.value = data.get("value",voucher.value)
        voucher.status = data.get("status",voucher.status)
        voucher.save()
        
        return Response(self.get_serializer(voucher).data,status=status.HTTP_201_CREATED)
