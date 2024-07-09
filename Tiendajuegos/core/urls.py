from django.urls import path
from .views import home, poblar_bd, producto_crud, producto_tienda, producto_ficha, index

urlpatterns = [
    path('', home, name="home"),
    path('poblar_bd/', poblar_bd, name="poblar_bd"),  
    path('producto/<str:action>/<int:id>/', producto_crud, name="producto_crud"),
    path('producto_tienda/', producto_tienda, name="producto_tienda"),
    path('producto_ficha/<int:id>/', producto_ficha, name="producto_ficha"),
    path('index/', index, name='index'),  # URL pattern for the 'Inicio' page
]
