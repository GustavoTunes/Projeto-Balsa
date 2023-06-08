/* POPUP CADASTRO */

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

/* POPUP MAPA */

function openPopup(){
    popup.classList.add("open-popup-mapa");
}

function closePopup(){
    popup.classList.remove("open-popup-mapa");
}

/* FIM CONFIRMAR SENHA */
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não coincidem!");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;