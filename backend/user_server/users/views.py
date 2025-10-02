from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password, check_password
import json
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            password = data.get('password')

            if not name or not email or not password:
                return JsonResponse({'error' : 'Missing fields'}, status=400)
            
            if User.objects.filter(email = email).exists():
                return JsonResponse({'error' : 'User already exists'}, status=409)
            
            hashed_password = make_password(password)

            newUser = User.objects.create(
                name = name,
                email = email,
                password = hashed_password
            )

            return JsonResponse({'id' : newUser.id, 'message' : 'Signed Up successfully'}, status=201)
        
        except json.JSONDecodeError:
            return JsonResponse({'error' : 'Invalid Json Data'}, status=400)
        except Exception as e:
            return JsonResponse({'error':str(e)}, status=500)
        
    return JsonResponse({'error': 'Invalid Method'}, status=405)

@csrf_exempt
def login_users(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({'error' : 'Missing fields'}, status=400)
            
            try:
                user = User.objects.get(email=email)
            except User.DoesNotExist:
                return JsonResponse({'error' : 'The User does not exist, Please SignUp'}, status=404)

            if not check_password(password, user.password):
                return JsonResponse({'error':'Invalid Password'}, status=401)
            
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = JsonResponse({'message' : 'Login Successfully'})

            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                samesite='Lax',
            )
            return response
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
        
    return JsonResponse({'error' : 'Invalid Method'}, status=405)
            
    

@csrf_exempt
def list_users(request):
    if request.method == 'GET':
        users = User.objects.all().values()
        return JsonResponse(list(users), safe=False)
    
@csrf_exempt
def get_users(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        return JsonResponse({'id': user.id, 'name': user.name, 'email': user.email})
    except User.DoesNotExist:
        return JsonResponse({'error' : 'User not found'}, status=404)
