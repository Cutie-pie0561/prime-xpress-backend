from django.db import models

class Booking(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    pickup = models.CharField(max_length=200)
    drop = models.CharField(max_length=200)
    travel_date = models.DateField()
    vehicle = models.CharField(max_length=100)
    notes = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.travel_date}"
