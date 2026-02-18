from django.db import models

class Testimonial(models.Model):
    STAR_CHOICES = [
        (1, "1 Star"),
        (2, "2 Stars"),
        (3, "3 Stars"),
        (4, "4 Stars"),
        (5, "5 Stars"),
    ]

    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    stars = models.IntegerField(choices=STAR_CHOICES, default=5)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.stars}★"
