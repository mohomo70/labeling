from django.db import models

class Picture(models.Model):
    image=models.ImageField(null=True, blank=True,default='/placeholder.png')
    tgs = models.TextField(null=True, blank=True)

class Tag(models.Model):
    tags = models.TextField(null=True, blank=True)