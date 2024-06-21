$(document).ready(function() {
    $.validator.addMethod("validEmailOrUsername", function(value, element) {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var usernameRegex = /^[a-zA-Z0-9_]+$/; 
        
        return this.optional(element) || emailRegex.test(value) || usernameRegex.test(value);
    }, "Por favor ingresa un correo electrónico o nombre de usuario válido."); 

    $("#loginForm").validate({
        rules: {
            usuario: {
                required: true,
                validEmailOrUsername: true 
            },
            contraseña: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            usuario: {
                required: "Por favor ingresa tu usuario."
            },
            contraseña: {
                required: "Por favor ingresa tu contraseña.",
                minlength: "Tu contraseña debe tener al menos 8 caracteres."
            }
        },
      errorElement: "div",
      errorPlacement: function(error, element) {
          error.addClass("invalid-feedback"); 
          element.closest('.form-group').append(error); 
      },
      highlight: function(element, errorClass, validClass) {
          $(element).addClass("is-invalid").removeClass("is-valid");
      },
      unhighlight: function(element, errorClass, validClass) {
          $(element).addClass("is-valid").removeClass("is-invalid");
      }
  });
});
