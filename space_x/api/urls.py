from django.contrib import admin
from django.urls import path
from space_x.api.views import MenuItemListView, AdvantageListView


urlpatterns = [
    path('menu/', MenuItemListView.as_view(), name='menu'),
    path('advantages/', AdvantageListView.as_view(), name='advantages'),
]

