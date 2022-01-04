const form = document.querySelector("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // Ontener los valores de los 'inputs'
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Validar que los campos no esten vacios
  if (usernameValue === "") {
    // Mostrar error y agregar clase error
    setErrorFor(username, "Username cannot be blank");
  } else {
    // Agregamos la clase success
    setSuccessFor(username);
  }

  // Validar email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }

  // Validar contraseña
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccessFor(password);
  }

  // Validar comprobacion de la contraseña
  if (password2Value === "") {
    setErrorFor(password2, "Password Check cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  // Obtenemos el contenedor del 'input'
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Agregar el mensaje de error dentro del 'small'
  small.innerText = message;

  // Agregar la clase 'error'
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email);
}
