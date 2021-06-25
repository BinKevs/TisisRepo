from .api import SupplierViewSet
from .api import SupplierViewSetWithPagination
from rest_framework.routers import DefaultRouter
from django.urls import path
router = DefaultRouter()
router.register(r'', SupplierViewSet, basename='suppliers')
urlpatterns = [
    path('withPagination/', SupplierViewSetWithPagination.as_view(), name='suppliersWithPagination'),
  
]
urlpatterns += router.urls
