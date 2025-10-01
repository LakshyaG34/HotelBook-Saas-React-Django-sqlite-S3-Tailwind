from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

# Create your views here.

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user = User.objects.create(
            name=data['name'],
            email=data['email'],
            age=data['age']
        )
        return JsonResponse({'id' : user.id, 'message' : 'User created Successfully'})
    

@csrf_exempt
def list_users(request):
    if request.method == 'GET':
        users = User.objects.all().values()
        return JsonResponse(list(users), safe=False)
    
@csrf_exempt
def get_users(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        return JsonResponse({'id': user.id, 'name': user.name, 'email': user.email, 'age': user.age})
    except User.DoesNotExist:
        return JsonResponse({'error' : 'User not found'}, status=404)
