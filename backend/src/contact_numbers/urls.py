from .api import ContactViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', ContactViewSet, basename='product_file')

urlpatterns = router.urls
