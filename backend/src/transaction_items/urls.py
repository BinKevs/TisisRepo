from .api import TransactionViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', TransactionViewSet, basename='transaction_items')

urlpatterns = router.urls
