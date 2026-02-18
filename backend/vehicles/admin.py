from django.contrib import admin
from .models import Vehicle

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ("name", "seats", "is_active")
    prepopulated_fields = {"slug": ("name",)}
