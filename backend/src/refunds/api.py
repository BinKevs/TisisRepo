from .models import Refund
from rest_framework import viewsets, permissions
from .serializers import RefundSerializer
from rest_framework.response import Response
from rest_framework import status
# from suppliers.models import Supplier


class RefundViewSet(viewsets.ModelViewSet):
    
    queryset = Refund.objects.all()
    serializer_class = RefundSerializer

    # def update(self,request,*args,**kwargs):
    #     voucher = Voucher.objects.get()
    #     data = request.data

    #     voucher.code = data.get("code",voucher.code)
    #     voucher.value = data.get("value",voucher.value)
    #     voucher.created_at = data.get("created_at",voucher.created_at)
    #     voucher.valid_till = data.get("valid_till",voucher.valid_till)
    #     voucher.claimed_date = data.get("claimed_date",voucher.claimed_date)
    #     voucher.claimed_by = data.get("claimed_by",voucher.claimed_by)
    #     voucher.save()
        
    #     return Response(self.get_serializer(voucher),status=status.HTTP_201_CREATED)
