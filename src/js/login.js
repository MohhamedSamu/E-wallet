var re = null;
function ValidarNombre(){
    var nombre = document.entradas.nombre.value;
    if (nombre == null || nombre == "" || nombre.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de nombre");
        return 0;
    }
}
// Valida el ingreso de la contraseña
function ValidarContra() {
    var password = document.entradas.password.value;
    if (password == null || password == "" || password.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de contraseña");
        return 0;
    }else{
        re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/;
        if (!(re.test(password))) {
            alert("Su contraseña debe ser de 8 a 15 caracteres y deben incluir una letra mayúscula, minúscula y un numero");
        }
    }
}
function inputAlphanumericOnly(e) {
    var evt = e ? e : event;
    var keyCode = (evt.which) ? evt.which : evt.keyCode;
    //alert("Código de tecla presionada " + keyCode);
    if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 122) && keyCode != 225 &&
        keyCode != 193 && keyCode != 233 && keyCode != 201 && keyCode != 237 && keyCode != 205 && keyCode != 243
        && keyCode != 211 && keyCode != 250 && keyCode != 218 && keyCode != 241 && keyCode != 209 &&
        keyCode != 252 && keyCode != 220 && keyCode != 161 && keyCode != 33 && keyCode != 191 && keyCode != 63
        && keyCode != 34 && keyCode != 46 && keyCode != 44 && keyCode != 59 && keyCode != 8 && keyCode != 13 &&
        keyCode != 27 && keyCode != 32) {
        //Any other input? Prevent the default response:
        alert("Sólo se aceptan caracteres alfabéticos");
        if (evt.preventDefault) evt.preventDefault();
        evt.returnValue = false;
        return false;
    }
    return true;
}
function addEventHandler(elem, eventType, handler) {
    if (elem.addEventListener) {
        //alert("Evento " + eventType + " controlado en el elemento " + elem);
        elem.addEventListener(eventType, handler, false);
    }
    else if (elem.attachEvent) {
        elem.attachEvent('on' + eventType, handler);
    }
    else {
        return 0;
    }
    return 1;
}
// onload: Call the init() function to add event handlers!
function init() {
    addEventHandler(document.entradas.nombre, 'keypress', inputAlphanumericOnly);
    //manda a llamar la funcion de verificacion de correo
    var boton = document.getElementById("B2");
    if (boton.addEventListener) {
        boton.addEventListener("click", ValidarNombre, false);
        boton.addEventListener("click", ValidarContra, false);
    }
    else if (boton.attachEvent) {
        boton.addEventListener("click", ValidarNombre, false);
        boton.attachEvent("onclick", ValidarContra);
    }
}
if (window.addEventListener) {
    window.addEventListener('load', init, false);
}
else if (window.attachEvent) {
    window.attachEvent('load', init);
}