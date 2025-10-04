from django.shortcuts import render
from user_server import settings
from .models import Hotel
import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import boto3
import time


@csrf_exempt
def add_hotel(request):
    if request.method=='POST':
        try:
            name = request.POST.get("name")
            location = request.POST.get("location")
            rooms = int(request.POST.get("rooms"))
            description = request.POST.get("description")
            file = request.FILES.get("file")

            if not name or not location or not rooms or not description:
                return JsonResponse({'err' : 'Missing fields'}, status=400)
            if Hotel.objects.filter(name=name).exists():
                return JsonResponse({'err' : 'Hotel already exist'}, status=400)
            
            hotelImageUrl = ""
            if file:
                s3_client = boto3.client(
                    "s3",
                    aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                    aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                    region_name=settings.AWS_REGION
                )
                key = f"hotel-images/{int(time.time())}_{file.name}"
                s3_client.upload_fileobj(
                    file,
                    settings.S3_BUCKET,
                    key,
                    ExtraArgs={"ContentType": file.content_type}
                )
                hotelImageUrl = f"https://{settings.S3_BUCKET}.s3.{settings.AWS_REGION}.amazonaws.com/{key}"

            
            newHotel = Hotel.objects.create(
                name=name,
                location=location,
                rooms=rooms,
                description=description,
                hotelImage=hotelImageUrl
            )

            return JsonResponse({'id':newHotel.id, 'message':'Hotel added successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error':str(e)}, status=500)
        
    return JsonResponse({'error': 'Invalid Method'}, status=405)

@csrf_exempt
def get_hotels(request):
    if request.method == 'GET':
        hotel = Hotel.objects.all().values()
        return JsonResponse(list(hotel), safe=False)
    
@csrf_exempt   
def get_hotel(request, hotel_id):
    if request.method == 'GET':
        try:
            hotel = Hotel.objects.get(id=hotel_id)
            return JsonResponse({'id' : hotel.id, 'name' : hotel.name})
        except Hotel.DoesNotExist:
            return JsonResponse({'err' : 'The hotel does not exist'}, status=404)
