from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GalleryCategoryViewSet

router = DefaultRouter()
router.register("", GalleryCategoryViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
