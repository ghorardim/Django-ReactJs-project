from django.shortcuts import render
from myapp.models import Message
from rest_framework import generics
from .serializers import MessageSerializers

# Create your views here.

class MessageViewSet(generics.ListAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializers

