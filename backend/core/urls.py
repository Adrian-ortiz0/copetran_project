from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ViajeAsientoListView
from .views import ClienteViewSet, RolViewSet, EmpleadoViewSet, AsientoViewSet, TipoVehiculoViewSet, CiudadViewSet, RutaViewSet, VehiculoViewSet, ViajeViewSet, ViajePilotoViewSet, TiqueteViewSet, ViajeAsientoViewSet

router = DefaultRouter()
router.register(r'clientes', ClienteViewSet)
router.register(r'roles', RolViewSet)
router.register(r'empleados', EmpleadoViewSet)
router.register(r'asientos', AsientoViewSet)
router.register(r'tipo_vehiculos', TipoVehiculoViewSet)
router.register(r'ciudades', CiudadViewSet)
router.register(r'rutas', RutaViewSet)
router.register(r'vehiculos', VehiculoViewSet)
router.register(r'viajes', ViajeViewSet)
router.register(r'viaje_pilotos', ViajePilotoViewSet)
router.register(r'tiquetes', TiqueteViewSet)
router.register(r'viaje_asientos', ViajeAsientoViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/viajes/<int:viaje_id>/asientos/', ViajeAsientoListView.as_view(), name='viaje-asiento-list'),
]
