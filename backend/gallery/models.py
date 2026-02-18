from django.db import models

class GalleryCategory(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class GalleryImage(models.Model):
    category = models.ForeignKey(
        GalleryCategory,
        related_name="images",
        on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="gallery/")
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.category.name} image"
