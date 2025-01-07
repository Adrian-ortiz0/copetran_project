from django.db import models

# Create your models here.

class Cliente(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    tipo_documento = models.CharField(max_length=25, choices=[
        ('Tarjeta de identidad', 'Tarjeta de identidad'),
        ('Cedula', 'Cedula'),
        ('Cedula de extranjeria', 'Cedula de extranjeria')
    ])
    documento = models.CharField(max_length=100, unique=True)
    fecha_nacimiento = models.DateField()
    telefono = models.CharField(max_length=25)

class Rol(models.Model):
    nombre = models.CharField(max_length=100)
    salario = models.DecimalField(max_digits=10, decimal_places=2)

class Empleado(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    correo = models.EmailField(max_length=100, unique=True, null=True, blank=True)
    tipo_documento = models.CharField(max_length=25, choices=[
        ('Tarjeta de identidad', 'Tarjeta de identidad'),
        ('Cedula', 'Cedula'),
        ('Cedula de extranjeria', 'Cedula de extranjeria')
    ])
    documento = models.CharField(max_length=100, unique=True)
    fecha_contratacion = models.DateField(auto_now_add=True)
    fecha_nacimiento = models.DateField()
    rol = models.ForeignKey(Rol, on_delete=models.CASCADE)

class Asiento(models.Model):
    numero = models.CharField(max_length=3)
    ocupado = models.BooleanField(default=False)

class TipoVehiculo(models.Model):
    nombre = models.CharField(max_length=100)
    tipo_uso = models.CharField(max_length=25, choices=[
        ('Departamental', 'Departamental'),
        ('Municipal', 'Municipal')
    ])
    capacidad = models.IntegerField()

class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    departamento = models.CharField(max_length=100)

class Ruta(models.Model):
    origen = models.ForeignKey(Ciudad, on_delete=models.CASCADE, related_name='origen')
    destino = models.ForeignKey(Ciudad, on_delete=models.CASCADE, related_name='destino')
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    duracion_estimada = models.IntegerField()

class Vehiculo(models.Model):
    placa = models.CharField(max_length=100, unique=True)
    numero_vehiculo = models.CharField(max_length=20, unique=True)
    estado = models.CharField(max_length=25, choices=[
        ('Activo', 'Activo'),
        ('Mantenimiento', 'Mantenimiento'),
        ('Fuera de servicio', 'Fuera de servicio')
    ], default='Activo')
    tipo_vehiculo = models.ForeignKey(TipoVehiculo, on_delete=models.CASCADE)

class Viaje(models.Model):
    vehiculo = models.ForeignKey(Vehiculo, on_delete=models.CASCADE)
    ruta = models.ForeignKey(Ruta, on_delete=models.CASCADE)
    fecha_salida = models.DateField()
    hora_salida = models.TimeField()
    estado = models.CharField(max_length=25, choices=[
        ('Programado', 'Programado'),
        ('En curso', 'En curso'),
        ('Completado', 'Completado'),
        ('Cancelado', 'Cancelado')
    ], default='Programado')

class ViajePiloto(models.Model):
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    piloto = models.ForeignKey(Empleado, on_delete=models.CASCADE)
    tipo_piloto = models.CharField(max_length=25, choices=[
        ('Principal', 'Principal'),
        ('Copiloto', 'Copiloto')
    ])

class Tiquete(models.Model):
    numero_factura = models.CharField(max_length=100)
    tipo_pago = models.CharField(max_length=25, choices=[
        ('Efectivo', 'Efectivo'),
        ('Tarjeta', 'Tarjeta')
    ])
    descuento = models.DecimalField(max_digits=10, decimal_places=2)
    total_con_descuento = models.DecimalField(max_digits=10, decimal_places=2)
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    asiento = models.ForeignKey(Asiento, on_delete=models.CASCADE)
    empleado_venta = models.ForeignKey(Empleado, on_delete=models.CASCADE, related_name='empleado_venta')
    fecha_venta = models.DateField()

class ViajeAsiento(models.Model):
    viaje = models.ForeignKey(Viaje, on_delete=models.CASCADE)
    asiento = models.ForeignKey(Asiento, on_delete=models.CASCADE)
