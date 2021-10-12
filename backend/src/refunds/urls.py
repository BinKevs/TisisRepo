from .api import RefundViewSet
from django.urls import path, include,re_path
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', RefundViewSet, basename='refunds')
# urlpatterns = [
#     path('',TransactionStatusUpdate, name="transaction-status-update"),
# ]
urlpatterns = router.urls
