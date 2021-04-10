from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    # path('api-auth/', include('rest_framework.urls')),
    # path('rest-auth/', include('rest_auth.urls')),
    # path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('', include('accounts.api.urls')),
    path('admin/', admin.site.urls),
    path('api/articles/', include('articles.api.urls')),
    path('api/categories/', include('categories.api.urls')),
    path('api/inventories', include('inventories.api.urls')),
    path('api/products/', include('products.api.urls')),
    path('api/suppliers/', include('suppliers.api.urls')),
    path('api/transactions/items/', include('transaction_items.api.urls')),
    path('api/transactions/', include('transactions.api.urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
