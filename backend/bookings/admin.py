from django.contrib import admin
from .models import Booking

@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "phone",
        "vehicle",
        "travel_date",
        "created_at",
    )
    search_fields = ("name", "phone", "pickup", "drop")
