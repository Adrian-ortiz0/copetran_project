from django.shortcuts import render

from rest_framework import viewsets
from .models import Cliente, Rol, Empleado, Asiento, TipoVehiculo, Ciudad, Ruta, Vehiculo, Viaje, ViajePiloto, Tiquete, ViajeAsiento
from .serializers import ClienteSerializer, RolSerializer, EmpleadoSerializer, AsientoSerializer, TipoVehiculoSerializer, CiudadSerializer, RutaSerializer, VehiculoSerializer, ViajeSerializer, ViajePilotoSerializer, TiqueteSerializer, ViajeAsientoSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

class RolViewSet(viewsets.ModelViewSet):
    queryset = Rol.objects.all()
    serializer_class = RolSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer

class AsientoViewSet(viewsets.ModelViewSet):
    queryset = Asiento.objects.all()
    serializer_class = AsientoSerializer

class TipoVehiculoViewSet(viewsets.ModelViewSet):
    queryset = TipoVehiculo.objects.all()
    serializer_class = TipoVehiculoSerializer

class CiudadViewSet(viewsets.ModelViewSet):
    queryset = Ciudad.objects.all()
    serializer_class = CiudadSerializer

class RutaViewSet(viewsets.ModelViewSet):
    queryset = Ruta.objects.all()
    serializer_class = RutaSerializer

class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.all()
    serializer_class = VehiculoSerializer

class ViajeViewSet(viewsets.ModelViewSet):
    queryset = Viaje.objects.all()
    serializer_class = ViajeSerializer

class ViajePilotoViewSet(viewsets.ModelViewSet):
    queryset = ViajePiloto.objects.all()
    serializer_class = ViajePilotoSerializer

class TiqueteViewSet(viewsets.ModelViewSet):
    queryset = Tiquete.objects.all()
    serializer_class = TiqueteSerializer

class ViajeAsientoViewSet(viewsets.ModelViewSet):
    queryset = ViajeAsiento.objects.all()
    serializer_class = ViajeAsientoSerializer
