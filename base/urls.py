from django.urls import path
from .views import getPictures, getTag, getPicture, picUpdate


urlpatterns = [
    path('pics/', getPictures, name='pictures'),
    path('pics/update/<str:pk>/', picUpdate, name='pictureUpdate'),
    path('pics/<str:pk>/', getPicture, name='picture'),
    path('tags/', getTag, name='tags'),
]
