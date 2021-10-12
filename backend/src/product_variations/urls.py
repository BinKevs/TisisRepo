from .api import ProductVariationViewSet
from django.urls import path, include,re_path
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', ProductVariationViewSet, basename='product_variations')

urlpatterns = router.urls
