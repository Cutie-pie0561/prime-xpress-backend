from django.db import models

class Vehicle(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)
    seats = models.IntegerField()

    is_ac = models.BooleanField(default=True)

    description = models.TextField(blank=True, null=True)
    ideal_for = models.CharField(max_length=200, blank=True, null=True)

    image = models.ImageField(
        upload_to="vehicles/",
        blank=True,
        null=True
    )

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
