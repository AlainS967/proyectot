$(document).ready(function() {

  $.validator.addMethod("rutChileno", function(value, element) {
    var rutPattern = /^\d{7,8}-[\dK]$/i; 
    if (!rutPattern.test(value)) {
        return false;
    }

    var rutSinGuion = value.replace("-", "");
    var rut = rutSinGuion.slice(0, -1);
    var dv = rutSinGuion.slice(-1).toUpperCase(); 
    var factor = 2;
    var sum = 0;
    for (var i = rut.length - 1; i >= 0; i--) {
        sum += parseInt(rut.charAt(i)) * factor;
        factor = factor === 7 ? 2 : factor + 1;
    }
    var dvCalculado = 11 - (sum % 11);
    dvCalculado = dvCalculado === 11 ? "0" : dvCalculado === 10 ? "K" : dvCalculado.toString();

    return dv === dvCalculado;
}, "El RUT no es válido (escriba sin puntos y con guión)");

$.validator.addMethod("soloLetras", function(value, element) {
  return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
}, "Sólo se permiten letras y espacios en blanco.");

$.validator.addMethod("emailCompleto", function(value, element) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
  return regex.test(value);
}, 'El formato del correo no es válido');

    $("#loginForm").validate({
        rules: {
            id: {
                required: true,
                digits: true
            },
            rol:{
              required: true
            },
            rut: {
                required: true,
                rutChileno: true 
            },
            nombre: {
                required: true,
                soloLetras: true 
            },
            apellido: {
                required: true,
                soloLetras: true
            },
            correo: {
                required: true,
                emailCompleto: true
            },
            direccion: {
            required:true
            },
            password: {
                required: true
            }
        },
        messages: { 
            id: {
                required: "Por favor, ingresa un ID.",
                digits: "El ID debe contener solo números."
            },
            rol:{
              required:"es un campo obligatorio"
            },
            rut: {
                required: "Por favor, ingresa un RUT.",
                rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
            },
            nombre: {
                required: "Por favor, ingresa tu nombre.",
                soloLetras: "Solo se permiten letras."
            },
            apellido: {
                required: "Por favor, ingresa tu apellido.",
                soloLetras: "Solo se permiten letras."
            },
            correo: {
                
                required: "Por favor, ingresa un correo electrónico.",
                emailCompleto: "Por favor, ingresa un correo electrónico válido."
            },
            direccion: {
                required: "Por favor, ingresa una dirección."
            },
            password: {
                required: "Por favor, ingresa una contraseña."
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