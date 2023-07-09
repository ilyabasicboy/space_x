from django.urls import path
from space_x.frontend.views import index_page


urlpatterns = [
    path('', index_page, name='index'),
]

