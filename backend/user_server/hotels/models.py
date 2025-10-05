from django.db import models

# Create your models here.
class Hotel(models.Model):
    name=models.CharField(max_length=100)
    location=models.CharField(max_length=100)
    rooms=models.IntegerField()
    description=models.CharField(max_length=255)
    hotelImage = models.CharField(max_length=255, blank=True, default="")
    price = models.IntegerField()
    landmark = models.CharField(max_length=255)

    def __str__(self):
        return self.name

