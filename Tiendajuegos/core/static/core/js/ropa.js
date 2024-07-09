$(document).ready(function() {
    $.ajax({
        url: 'https://fakestoreapi.com/products',
        method: 'GET',
        success: function(ropa) {
            $.each(ropa, function(index, item) {
                let cardHtml = `
                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3 text-center">
                        <div class="card" style="width: 18rem;">
                            <a href="${item.link}" target="_blank">
                                <img src="${item.image}" class="card-img-top" alt="...">
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">
                                    <span class="index_disponible">Disponible</span><br>
                                    <span class="index_precio">Precio: $${item.price}</span><br>
                                    <span class="index_descripcion">${item.description}</span>
                                </p>
                                <a href="#" class="btn btn-primary">Ver ficha</a>
                            </div>
                        </div>
                    </div>
                `;
                $('#fila-ropa').append(cardHtml);
            });
        },
        error: function() {
            alert('Error al obtener los datos de la API.');
        }
    });
});
