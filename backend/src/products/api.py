from products.models import Product
from rest_framework import viewsets, permissions
from .serializers import ProductSerializer
from inventories.models import Inventory
from suppliers.models import Supplier
from rest_framework import filters
from activities_log.models import Log_Activity
from product_files.models import Product_file
from rest_framework.response import Response
from rest_framework import status


from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import api_view, parser_classes
from .models import Product
from product_files.models import Product_file

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (MultiPartParser,FormParser)
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
    
    def create(self, request, *args, **kwargs):
        # print(request.data)
        Log_Activity.save_log_activity(
                account=request.user,
                action_done = request.data['action_done'],
            )

        files = request.FILES.getlist('file_content')
        request.data.pop('file_content')
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        product_qs = Product.objects.get(id=serializer.data['id'])
        uploaded_files = []
        for file in files:
            content = Product_file.objects.create(image=file)
            uploaded_files.append(content)
        product_qs.file_content.add(*uploaded_files)
        context = serializer.data
        print(uploaded_files)
        context["file_content"] = [file.id for file in uploaded_files]
        return Response(context, status=status.HTTP_201_CREATED)

        # serializer = self.get_serializer(data=request.data)
        # # request.data.pop('file_content')
        # serializer.is_valid(raise_exception=True)
        # self.perform_create(serializer)
        # Product_file.save_product_file(
        #     request.FILES.getlist("file_content")
        # )
        # headers = self.get_success_headers(serializer.data)
        # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
# @api_view(['POST'])
# @parser_classes([MultiPartParser, FormParser])
# def create_product(request):
#     if request.method == 'POST':
#         files = request.FILES.getlist('file_content')
#         print(dict((request.data).list())['file_content'])
#         if files:
#             request.data.pop('file_content')
#             serializer = ProductSerializer(data=request.data)
#             if serializer.is_valid():
#                 product_qs = Product.objects.get(id=serializer.data['id'])
#                 uploaded_files = []
#                 for file in files:
#                     content = Product_file.objects.create(media=file)
#                     uploaded_files.append(content)

#                 product_qs.file_content.add(*uploaded_files)
#                 context = serializer.data
#                 context["file_content"] = [file.id for file in uploaded_files]
#                 return Response(context, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         else:
#             serializer = ProductSerializer(data=request.data)
#             if serializer.is_valid():        
#                 context = serializer.data            
#                 return Response(context, status=status.HTTP_201_CREATED)
#             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#     else:
#         serializer = ProductSerializer(data=request.data)
#         return Response(serializer.errors, status=status.HTTP_405_METHOD_NOT_ALLOWED)