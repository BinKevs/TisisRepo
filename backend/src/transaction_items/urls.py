from .api import Transaction_itemViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', Transaction_itemViewSet, basename='transaction_item')

urlpatterns = router.urls
