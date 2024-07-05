from django import forms
from django.forms import ModelForm, fields
from .models import Cliente, Producto


class Productoform(ModelForm):
    class Meta:
        model = Producto
        fields = ['Categoria', 'nombreproducto', 'cantidad']
class Clienteform(ModelForm):
    class Meta:
        model = Cliente
        fields = ['rut', 'nombre', 'apellidos', 'correo', 'direccion']