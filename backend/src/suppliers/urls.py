from .api import SupplierViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', SupplierViewSet, basename='suppliers')

urlpatterns = router.urls
