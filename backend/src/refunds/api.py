from .models import Refund
from rest_framework import viewsets, permissions
from .serializers import RefundSerializer,RefundSerializerCreate
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
# from suppliers.models import Supplier
from rest_framework import filters

class RefundViewSet(viewsets.ModelViewSet):
    ordering_fields = ['created_at'] 
    filter_backends = [filters.OrderingFilter]
    parser_classes = (MultiPartParser,FormParser)
    queryset = Refund.objects.all()
    serializer_class = RefundSerializer
    def create(self, request, *args, **kwargs):
        serializer = RefundSerializerCreate(data=request.data)
        serializer.is_valid(raise_exception=True)
        instance = serializer.save()
        instance_serializer = RefundSerializer(instance)
        return Response(instance_serializer.data)
    def update(self,request,*args,**kwargs):
        refund = Refund.objects.get(pk=request.data['tranItemID'])
        data = request.data

        refund.user = data.get("user",refund.user)
        refund.transaction_item = data.get("transaction_item",refund.transaction_item)
        refund.product_condition_video = data.get("product_condition_video",refund.product_condition_video)
        refund.description = data.get("description",refund.description)
        refund.created_at = data.get("created_at",refund.created_at)
        refund.response = data.get("response",refund.response)
        refund.status = data.get("status",refund.status)
        refund.save()
        return Response(RefundSerializer(refund).data,status=status.HTTP_201_CREATED)
    # def get_serializer_class(self): 
    #     serializer_class = self.serializer_class 
    #     if self.request.method == 'POST': 
    #         serializer_class = RefundSerializerCreate 
    #     return serializer_class
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
