from django.db import models

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, blank=True)
    message = models.TextField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
