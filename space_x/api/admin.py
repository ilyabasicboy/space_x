from django.contrib import admin
from space_x.api.models import MenuItem, Advantage
from adminsortable2.admin import SortableAdminMixin


@admin.register(MenuItem)
class MenuItemAdmin(SortableAdminMixin, admin.ModelAdmin):
    model = MenuItem


@admin.register(Advantage)
class AdvantageAdmin(SortableAdminMixin, admin.ModelAdmin):
    model = Advantage
