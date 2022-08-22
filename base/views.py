from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Picture, Tag
from .serializers import PictureSerializer,TagSerializer

@api_view(['GET'])
def getPictures(request):
    pictures = Picture.objects.all()
    serializer = PictureSerializer(pictures, many=True)
    return Response(serializer.data)

@api_view(["GET"])
def getPicture(request,pk):
    picture = Picture.objects.get(id=pk)
    serializer = PictureSerializer(picture, many = False)
    
    return Response(serializer.data)    


@api_view(['GET'])
def getTag(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def picUpdate(request, pk):
    picture = Picture.objects.get(id=pk)
    serializer = PictureSerializer(instance=picture, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)
