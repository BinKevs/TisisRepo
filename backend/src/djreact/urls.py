from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
   
    path('api/articles/', include('articles.api.urls')),
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/products/', include('products.urls')),
    path('api/categories/', include('categories.urls')),
    path('api/suppliers/', include('suppliers.urls')),
    # path('api/suppliers/withPagination', include('suppliers.urlsWithPagination')),
    path('api/inventories/', include('inventories.urls')),
    path('api/transactions/items/', include('transaction_items.urls')),
    path('api/transactions/', include('transactions.urls')),
    path('api/attendance_log/', include('attendance_log.urls')),
    path('api/activity_log/', include('activities_log.urls')),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
                