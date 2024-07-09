from django.shortcuts import redirect, render
from .models import Producto
from .forms import ProductoForm

def home(request):
    return render(request, "core/index.html")

# In your core/views.py file
def index(request):  # Create a view for the 'Inicio' page
    return render(request, 'core/index.html')  # Render the 'base.html' template

def producto_tienda(request):
    productos = Producto.objects.all().order_by('nombreProducto')
    return render(request, "core/producto_tienda.html", {'productos': productos})

def producto_ficha(request, id):
    producto = Producto.objects.get(id=id)
    return render(request, "core/producto_ficha.html", {'producto': producto})

def producto_crud(request, action, id=-1):  # Valor por defecto para id
    mensaje = ""
    if request.method == 'POST':
        if action == 'ins':
            form = ProductoForm(request.POST)
            if form.is_valid():
                form.save()
                mensaje = "¡El producto fue creado correctamente!"
                return redirect('producto_tienda')  # Redirige después de crear
        elif action == 'upd':
            producto = Producto.objects.get(id=id)
            form = ProductoForm(request.POST, instance=producto)
            if form.is_valid():
                form.save()
                mensaje = "¡El producto fue actualizado correctamente!"
                return redirect('producto_tienda')  # Redirige después de actualizar
    else:
        if action == 'upd':
            producto = Producto.objects.get(id=id)
            form = ProductoForm(instance=producto)
        else:
            form = ProductoForm()

    if action == 'del':
        Producto.objects.get(id=id).delete()
        mensaje = "¡El producto fue eliminado correctamente!"
        return redirect('producto_tienda')  # Redirige después de eliminar

    productos = Producto.objects.all()
    return render(request, "core/producto.html", {
        'productos': productos,
        'form': form,
        'action': action,
        'id': id,
        'mensaje': mensaje,
    })


def poblar_bd(request):
    Producto.objects.all().delete()  # Borra los productos existentes

    productos_iniciales = [
        {"nombreProducto": "The Legend of Zelda: Tears of the Kingdom", "cantidad": 15},
        {"nombreProducto": "Hogwarts Legacy", "cantidad": 20},
        {"nombreProducto": "Final Fantasy XVI", "cantidad": 10},
        {"nombreProducto": "Star Wars Jedi: Survivor", "cantidad": 8},
        {"nombreProducto": "Resident Evil 4 Remake", "cantidad": 12},
    ]

    for producto_data in productos_iniciales:
        Producto.objects.create(**producto_data)

    return redirect('producto_crud', action='ins', id=-1)  # Redirige a la vista de crear producto
