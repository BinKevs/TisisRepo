from .api import AccountViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', AccountViewSet, basename='accounts')

urlpatterns = router.urls
