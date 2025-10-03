from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_user, name='create_user'),
    path('all/', views.list_users, name='list_users'),
    path('<int:user_id>/', views.get_users, name = 'get_users'),
    path('login/', views.login_users, name = 'login_users'),
    path('logout/', views.logout_users, name = 'logout_users'),
    path('me/', views.me_view, name = 'me_view'),
]