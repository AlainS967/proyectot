from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name="home"),
    path('index/', index, name='index'),  # URL pattern for the 'Inicio' page
    path('registro/', registro, name='registro'),
    path('nosotros/', nosotros, name='nosotros'),
    path('ingresar/', ingresar, name='ingresar'),
    path('administrador/', administrador, name='administrador'),
    path('ropa/', ropa, name='ropa'),          
    path('mant_usuarios/', mant_usuarios, name='mant_usuarios'), 
    path('mant_productos/', mant_productos, name='mant_productos'),    
    path('historialcompras/', historialcompras, name='historialcompras'),    
    path('mant_bodega/', mant_bodega, name='mant_bodega'),    
    path('boleta/', boleta, name='boleta'),     
    path('fichasekiro/', fichasekiro, name='fichasekiro'),       
    path('indexadmin/', indexadmin, name='indexadmin'),     
    path('poblar_bd/', poblar_bd, name="poblar_bd"),  
    path('producto/<str:action>/<int:id>/', producto_crud, name="producto_crud"),
    path('producto_tienda/', producto_tienda, name="producto_tienda"),
    path('producto_ficha/<int:id>/', producto_ficha, name="producto_ficha"),
 
]
