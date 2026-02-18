from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "city", "stars", "is_active")
    list_filter = ("stars", "is_active")
    search_fields = ("name", "city", "message")
