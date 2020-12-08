from .api import InventoryViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', InventoryViewSet, basename='inventories')

urlpatterns = router.urls
