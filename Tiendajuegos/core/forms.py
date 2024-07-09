from django import forms
from django.forms import ModelForm
from .models import Producto, Cliente

class ProductoForm(ModelForm):
    class Meta:
        model = Producto
        fields = ['categoria', 'nombreProducto', 'cantidad']  # Case sensitive

class Clienteform(ModelForm):
    class Meta:
        model = Cliente
        fields = ['rut', 'nombre', 'apellidos', 'correo', 'direccion']