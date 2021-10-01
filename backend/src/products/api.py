from products.models import Product
from rest_framework import serializers, viewsets, permissions
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
from product_variations.models import Product_variation
from inventories.models import Inventory
from product_files.models import Product_file
from suppliers.models import Supplier
from product_variations.serializers import Product_VariationSerializer
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (MultiPartParser,FormParser)
    ordering_fields = ['id'] 
    filter_backends = [filters.OrderingFilter]
    
    def create(self, request, *args, **kwargs):
        print(request.data)
        Log_Activity.save_log_activity(
                account=request.user,
                action_done = request.data['action_done'],
            )
        files = request.FILES.getlist('file_content')
        request.data.pop('file_content') 
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        product_current = Product.objects.get(id=serializer.data['id'])
        supplier_current = Supplier.objects.get(id=request.data['supplier'])
        productVariation = Product_variation.objects.create(stock=request.data['stock'],size=request.data['size'],color=request.data['color'],weight=request.data['weight'])
        Inventory.objects.create(new_stock=request.data['stock'],supplier=supplier_current,product=product_current)
        product_current.variation.add(productVariation) 
        uploaded_files = []
        for file in files:
            content = Product_file.objects.create(image=file)
            uploaded_files.append(content)
        product_current.file_content.add(*uploaded_files)
        context = serializer.data
        print(uploaded_files)
        context["variation"] = [{"id":productVariation.id,"size":productVariation.size,"color":productVariation.color,"stock":productVariation.stock,"weight":productVariation.weight}]
        context["file_content"] = [file.id for file in uploaded_files]
        print(context)
        return Response(context, status=status.HTTP_201_CREATED)

        


@api_view(["POST"])
@parser_classes([MultiPartParser, FormParser])
def ProductImageAddUpdate(request, pk):
    files = request.FILES.getlist('file_content')
    product_to_update = Product.objects.get(id=pk)
    uploaded_files = []
    for file in files:
        content = Product_file.objects.create(image=file)
        uploaded_files.append(content)
    product_to_update.file_content.add(*uploaded_files)
    # context = [file.id for file in uploaded_files]
    serializer = ProductSerializer(Product.objects.get(id=pk))
    context = serializer.data
    context["file_content"] = [file.id for file in uploaded_files]
    return Response(context,status=status.HTTP_201_CREATED)
    # product_object.id = data.get("id",product_object.id)
    # product_object.product_id = data.get("product_id",product_object.product_id)
    # product_object.name = data.get("name",product_object.name)
    # product_object.category = data.get("category",product_object.category)
    # product_object.supplier = data.get("supplier",product_object.supplier)
    # product_object.image = data.get("image",product_object.image)
    # product_object.description = data.get("description",product_object.description)
    # product_object.stock = data.get("stock",product_object.stock)
    # product_object.price = data.get("price",product_object.price)
    # product_object.size = data.get("size",product_object.size)
    # product_object.color = data.get("color",product_object.color)
    # product_object.file_content = data.get("file_content",product_object.file_content)
    # product_object.status = data.get("status",product_object.status)
    


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
#                 product_current = Product.objects.get(id=serializer.data['id'])
#                 uploaded_files = []
#                 for file in files:
#                     content = Product_file.objects.create(media=file)
#                     uploaded_files.append(content)

#                 product_current.file_content.add(*uploaded_files)
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
