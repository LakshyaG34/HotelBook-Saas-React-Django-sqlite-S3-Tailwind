from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_hotel, name='add_hotel'),
    path('list/', views.get_hotels, name='get_hotels'),
    path('getHotel/', views.get_hotel, name='get_hotel'),
]