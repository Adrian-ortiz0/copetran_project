from rest_framework import serializers
from .models import Cliente, Rol, Empleado, Asiento, TipoVehiculo, Ciudad, Ruta, Vehiculo, Viaje, ViajePiloto, Tiquete, ViajeAsiento

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = '__all__'

class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

class AsientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Asiento
        fields = '__all__'

class TipoVehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoVehiculo
        fields = '__all__'

class CiudadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = '__all__'

class RutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ruta
        fields = '__all__'

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo
        fields = '__all__'

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = '__all__'

class ViajePilotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViajePiloto
        fields = '__all__'

class TiqueteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tiquete
        fields = '__all__'

class ViajeAsientoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ViajeAsiento
        fields = '__all__'
