// se seleccionar el formulario
const form = document.getElementById("registro");

// listener al boton
form.addEventListener("submit", function(event) {
  event.preventDefault(); // ???

  // se obtienen los valores del formulario
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  // validacion
  if(correo === "admin@platmo.cl" && password === "12345") {
    alert("¡Bienvenido!");
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
