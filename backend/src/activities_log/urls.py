from .api import Log_ActivityViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', Log_ActivityViewSet, basename='log_activity')

urlpatterns = router.urls
