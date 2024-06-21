$(document).ready(function() {
    $("#loginForm").validate({
        rules: {
            idproducto: {
                required: true,
                digits: true // Solo números
            },
            nombre: "required",
            descripcion: "required",
            precio: {
                required: true,
                number: true, // Solo números
                min: 0
            },
            descuento1: {
                required: true,
                number: true,
                range: [0, 100]
            },
            descuento2: {
                number: true,
                range: [0, 100]
            }
        },
        messages: {
            idproducto: {
                required: "Por favor ingrese un ID.",
                digits: "El ID debe contener solo números."
            },
            nombre: "Por favor ingrese un nombre.",
            descripcion: "Por favor ingrese una descripción.",
            precio: {
                required: "Por favor ingrese un precio.",
                number: "El precio debe ser un número.",
                min: "El precio debe ser mayor o igual a 0."
            },
            descuento1: {
                required: "Por favor ingrese un descuento para suscriptor.",
                number: "El descuento debe ser un número.",
                range: "El descuento debe estar entre 0 y 100."
            },
            descuento2: {
                number: "El descuento debe ser un número.",
                range: "El descuento debe estar entre 0 y 100."
            }
        },
        errorElement: "em",
    errorPlacement: function(error, element) {
        error.addClass("invalid-feedback");
        element.closest(".form-group").append(error);
    },
    highlight: function(element) {
        $(element).addClass("is-invalid").removeClass("is-valid");
    },
    unhighlight: function(element) {
        $(element).addClass("is-valid").removeClass("is-invalid");
    }
});
});