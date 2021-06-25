from .api import Attendance_LogViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'', Attendance_LogViewSet, basename='attendance_log')

urlpatterns = router.urls
