from transaction_items.models import Transaction_item
from rest_framework import viewsets, permissions
from .serializers import Transaction_itemSerializer
from transactions.models import Transaction
from products.models import Product
from rest_framework.response import Response
from rest_framework import status
from collections import defaultdict


class TransactionViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    queryset = Transaction_item.objects.all()
    serializer_class = Transaction_itemSerializer

    # def perform_create(self, serializer):
    #     serializer.save(transaction=Transaction.objects.get(
    #         pk=self.request.data.get('transaction')))
    #     serializer.save(product=Product.objects.get(
    #         pk=self.request.data.get('product')))

    def create(self, request, *args, **kwargs):
        data = request.data.get(
            "items") if 'items' in request.data else request.data
        many = isinstance(data, list)
        # print(data)
        arrOfKeys = []
        for key in data:
            arrOfKeys.append(key['prod_id'])
        for key in range(0, len(data)):
            data[key]['product'] = arrOfKeys[key]
        # print(data, many)
        serializer = self.get_serializer(data=data, many=many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

        # for x in data:
        #     test += Product.objects.get(
        #         pk=key['product_id'])
        #     # if x['product_id'] == 20:
        #     #     print("i found it!")
        #     #     break
        # print(data)

    # # def get_queryset(self):
    # #     return
    # #     self.request.user.articles.all()
