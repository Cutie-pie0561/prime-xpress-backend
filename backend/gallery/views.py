from rest_framework import viewsets
from .models import GalleryCategory
from .serializers import GalleryCategorySerializer

class GalleryCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer
