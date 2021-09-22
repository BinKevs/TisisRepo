from .api import ReviewViewSet
from django.urls import path, include,re_path
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', ReviewViewSet, basename='vouchers')
# urlpatterns = [
#     path('',TransactionStatusUpdate, name="transaction-status-update"),
# ]
urlpatterns = router.urls
