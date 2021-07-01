from django.urls import path, include
from .api import RegisterAPI, LoginAPI, UserAPI, AccountViewSet
# LogoutAPI
from knox import views as knox_views
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'api/accounts', AccountViewSet, basename='products')

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout')
    # path('api/auth/logout', LogoutAPI.as_view())
]


urlpatterns += router.urls
