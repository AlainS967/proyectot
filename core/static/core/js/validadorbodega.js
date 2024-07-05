$(document).ready(function() {
    $("#bodegaForm").validate({
        rules: {

            categoria:{
                required:true
            },
            nombre: {
                required: true,
            },
            cantidad:{
                number:true,
                min: 0
            },
        },
        messages: {

            categoria:{
                required:"la categoria es un campo obligatorio"
            },
            nombre: {
                required: "Por favor ingrese el nombre del juego.",
            },
            cantidad:{
                number:"solo se admiten numeros",
                min:"la cantidad debe ser minimo 0"
            },
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