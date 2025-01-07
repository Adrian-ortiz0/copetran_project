from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Cliente, Rol, Empleado, Asiento, TipoVehiculo, Ciudad, Ruta, Vehiculo, Viaje, ViajePiloto, Tiquete, ViajeAsiento

admin.site.register(Cliente)
admin.site.register(Rol)
admin.site.register(Empleado)
admin.site.register(Asiento)
admin.site.register(TipoVehiculo)
admin.site.register(Ciudad)
admin.site.register(Ruta)
admin.site.register(Vehiculo)
admin.site.register(Viaje)
admin.site.register(ViajePiloto)
admin.site.register(Tiquete)
admin.site.register(ViajeAsiento)
