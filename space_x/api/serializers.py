from rest_framework import serializers
from space_x.api.models import MenuItem, Advantage


class MenuItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = MenuItem
        fields = '__all__'


class AdvantageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Advantage
        fields = '__all__'