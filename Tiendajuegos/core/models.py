from django.db import models

class Producto(models.Model):
    categoria = models.CharField(max_length=50, verbose_name="Categoría")  # Changed to CharField
    nombreProducto = models.CharField(max_length=80, verbose_name="Nombre del producto")
    cantidad = models.PositiveIntegerField(default=0, verbose_name="Cantidad en stock")

    def __str__(self):
        return self.nombreProducto

class Cliente(models.Model):
    rut = models.CharField(primary_key=True, max_length=12, verbose_name="RUT")
    nombre = models.CharField(max_length=50, verbose_name="Nombre")
    apellidos = models.CharField(max_length=100, verbose_name="Apellidos")
    correo = models.EmailField(unique=True, verbose_name="Correo electrónico")
    direccion = models.CharField(max_length=200, blank=True, null=True, verbose_name="Dirección")

    def __str__(self):
        return f"{self.nombre} {self.apellidos} ({self.rut})" 
