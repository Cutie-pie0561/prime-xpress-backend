from rest_framework import serializers
from .models import GalleryCategory, GalleryImage

class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ["id", "image", "caption"]

class GalleryCategorySerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True)

    class Meta:
        model = GalleryCategory
        fields = ["id", "name", "slug", "images"]
