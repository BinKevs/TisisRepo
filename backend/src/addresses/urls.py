from .api import AddressViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', AddressViewSet, basename='product_file')

urlpatterns = router.urls
