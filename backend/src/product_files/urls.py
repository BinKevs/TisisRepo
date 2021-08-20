from .api import Product_FileViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', Product_FileViewSet, basename='product_file')

urlpatterns = router.urls
