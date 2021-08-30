from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from django.conf.urls import url
from allauth.account.views import confirm_email
from dj_rest_auth.registration.views import VerifyEmailView, RegisterView
from products.api import ProductImageAddUpdate
from transactions.api import TransactionStatusUpdate
# from products.api import create_product
urlpatterns = [
    # path('api/product-create', create_product, name="create_product"),
    path('api/articles/', include('articles.api.urls')),
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/products/', include('products.urls')),

    path('api/products-image/<pk>',ProductImageAddUpdate, name="products-image-add-update"),


    
    path('api/product_files/', include('product_files.urls')),
    path('api/categories/', include('categories.urls')),
    path('api/vouchers/', include('vouchers.urls')),
    path('api/suppliers/', include('suppliers.urls')),
    # path('api/suppliers/withPagination', include('suppliers.urlsWithPagination')),
    path('api/inventories/', include('inventories.urls')),
    path('api/transactions/items/', include('transaction_items.urls')),
    path('api/transactions/', include('transactions.urls')),
    path('api/transactions-status/<pk>',TransactionStatusUpdate, name="transaction-status-update"),
    # path('api/transactions-online/', include('transactions.urls-2')),
    path('api/attendance_log/', include('attendance_log.urls')),
    path('api/activity_log/', include('activities_log.urls')),


    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    path('auth/account-confirm-email/', VerifyEmailView.as_view(),
     name='account_email_verification_sent'),
    path('auth/registration/account-confirm-email/(?P<key>[-:\w]+)/$', VerifyEmailView.as_view(),
     name='account_confirm_email'),
    
    url(r'^account/', include('allauth.urls')),
    url(r'^accounts-rest/registration/account-confirm-email/(?P<key>.+)/$', confirm_email, name='account_confirm_email'),

]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
                