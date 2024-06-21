$(document).ready(function() {

  $.validator.addMethod("rutChileno", function(value, element) {
      var rutPattern = /^\d{7,8}-[\dK]$/;
      if (!rutPattern.test(value)) {
          return false;
      }

      var rutSinGuion = value.replace("-", "");
      var rut = rutSinGuion.slice(0, -1);
      var dv = rutSinGuion.slice(-1);
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

  $.validator.addMethod("emailCompleto", function(value, element) {
      var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]{2,}))$/;
      return regex.test(value);
  }, 'El formato del correo no es válido');

  $.validator.addMethod("soloLetras", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
  }, "Sólo se permiten letras y espacios en blanco.");

  $.validator.addMethod("passwordValido", function(value, element) {
      return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%])[A-Za-z\d!"#$%]{8,}$/.test(value);
  }, "La contraseña debe tener al menos un número, un símbolo, una letra mayúscula y minúscula, y ser de al menos 8 caracteres.");

  $("#rut").on('keyup', function(e) {
      e.target.value = e.target.value.toUpperCase();
  });

  $("#loginForm").validate({
      rules: {
          rut: {
              required: true,
              rutChileno: true
          },
          nombre: {
              required: true,
              soloLetras: true
          },
          username: { 
              required: true,
              soloLetras: true
          },
          correo: {
              required: true,
              emailCompleto: true
          },

          direccion: {
              required: true 
          },
      
          password: {
              required: true,
              passwordValido: true
          },
          password2: {
              required: true,
              equalTo: "#password"
          }
      },
      messages: {
          rut: {
              required: "El RUT es un campo requerido",
              rutChileno: "El RUT no es válido (escriba sin puntos y con guión)"
          },
          nombre: {
              required: "El nombre es un campo requerido",
              soloLetras: "El nombre sólo puede contener letras y espacios en blanco"
          },
          username: { 
              required: "Los apellidos son un campo requerido",
              soloLetras: "Los apellidos sólo pueden contener letras y espacios en blanco"
          },
          correo: {
              required: "El correo es un campo requerido",
              emailCompleto: "El formato del correo no es válido"
          },
          direccion: {
              required: "La dirección es un campo requerido" 
          },

          password: {
              required: "La contraseña es un campo requerido",
              passwordValido: "La contraseña debe tener al menos un número, un símbolo, una letra mayúscula y minúscula, y ser de al menos 8 caracteres."
          },
          password2: {
              required: "Repetir contraseña es un campo requerido",
              equalTo: "Debe repetir la contraseña escrita anteriormente"
          }
      },
      errorElement: "div",
errorPlacement: function(error, element) {
  error.addClass("invalid-feedback"); 
  if (element.prop("type") === "checkbox") {
      error.insertAfter(element.parent("div")); 
  } else {
      error.insertAfter(element); 
  }
},
highlight: function(element, errorClass, validClass) {
  $(element).addClass("is-invalid").removeClass("is-valid");
},
unhighlight: function(element, errorClass, validClass) {
  $(element).addClass("is-valid").removeClass("is-invalid");
}
  });
});