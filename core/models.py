from django.db import models


# Create your models here.


# Create Modelo para Categoria


class Producto(models.Model):
    Categoria = models.IntegerField(primary_key=True, verbose_name="Categoría del producto")
    nombreproducto = models.CharField(max_length=80, blank=False, null=False, verbose_name="Nombre del producto")
    cantidad = models.IntegerField(default=0, verbose_name="Cantidad en stock")


    def __str__(self):
        return self.nombreCategoria
    

class Cliente(models.Model):
    rut = models.CharField(primary_key=True, max_length=12, verbose_name="RUT")  # Incluye guión y dígito verificador
    nombre = models.CharField(max_length=50, blank=False, null=False, verbose_name="Nombre")
    apellidos = models.CharField(max_length=100, blank=False, null=False, verbose_name="Apellidos")
    correo = models.EmailField(unique=True, verbose_name="Correo electrónico")
    direccion = models.CharField(max_length=200, blank=True, null=True, verbose_name="Dirección")

    def __str__(self):
        return f"{self.nombre} {self.apellidos} ({self.rut})"
