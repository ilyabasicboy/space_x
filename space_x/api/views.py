from rest_framework.generics import ListAPIView
from rest_framework.filters import OrderingFilter
from rest_framework.permissions import AllowAny
from space_x.api.models import Advantage, MenuItem
from space_x.api.serializers import AdvantageSerializer, MenuItemSerializer


class MenuItemListView(ListAPIView):

    queryset = MenuItem.objects.filter(show=True)
    serializer_class = MenuItemSerializer
    filter_backends = [OrderingFilter]
    permission_classes = [
        AllowAny
    ]


class AdvantageListView(ListAPIView):

    queryset = Advantage.objects.filter(show=True)[:4]
    serializer_class = AdvantageSerializer
    filter_backends = [OrderingFilter]
    permission_classes = [
        AllowAny
    ]
