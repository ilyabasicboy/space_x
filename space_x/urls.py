from django.contrib import admin
from django.urls import path, include
from space_x.api.views import MenuItemListView, AdvantageListView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('space_x.api.urls')),
    path('', include('space_x.frontend.urls')),
]

