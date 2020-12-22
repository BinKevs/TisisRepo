from .api import CategoryViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', CategoryViewSet, basename='categories')

urlpatterns = router.urls
