from django.shortcuts import render
from rest_framework import viewsets
from .models import product
from .serializers import productSerializers

class ProductView(viewsets.ModelViewSet):
    queryset=product.objects.all()
    serializer_class=productSerializers