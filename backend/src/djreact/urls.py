from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('api/articles/', include('articles.api.urls')),
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/products/', include('products.urls')),
    path('api/suppliers/', include('suppliers.urls')),
    path('api/inventories', include('inventories.urls')),
]
