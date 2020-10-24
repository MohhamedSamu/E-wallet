var re = null;
function ValidarNombre() {
    var nombre = document.entradas.nombre.value;
    var apellido = document.entradas.apellido.value;
    if (nombre == null || nombre == "" || nombre.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de nombre");
        return 0;
    }
    if (apellido == null || apellido == "" || apellido.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Apellido");
        return 0;
    }
}
function ValidarEmail() {
    var email = document.entradas.correo.value;
    if (email == null || email == "" || email.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de correo");
        return 0;
    }
    re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    if (!(re.test(email))) {
        alert("El correo es invalido, Ingrese uno correcto");
    }
}
function ValidarNumTel() {
    var telefono = getElementById("telefono").value;
    if (telefono == null || telefono == "" || telefono.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Teléfono");
        return 0;
    }
    re = /^[0-9]{4}-?[0-9]{4}$/;
    if (!(re.test(telefono))) {
        alert("El número de teléfono es invalido, Ingrese uno correcto");
    }
}
function ValidarDireccion() {
    var direccion = document.entradas.direccion.value;
    if (direccion == null || direccion == "" || direccion.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Direccion");
        return 0;
    }
}
function ValidarDUI() {
    var dui = getElementById("dui").value;
    if (dui == null || dui == "" || dui.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de DUI");
        return 0;
    }
    re = /^[0-9]{8}-?[0-9]{1}$/;
    if (!(re.test(dui))) {
        alert("El número de DUI es invalido, Ingrese uno correcto, recuerde agregar el guión");
    }
}
function ValidarNIT() {
    var nit = getElementById("nit").value;
    if (nit == null || nit == "" || nit.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de NIT");
        return 0;
    }
    re = /^[0-9]{4}-?[0-9]{6}-?[0-9]{3}-?[0-9]{1}$/;
    if (!(re.test(nit))) {
        alert("El número de NIT es invalido, Ingrese uno correcto, recuerde agregar los guiones");
    }
}
// Valida el ingreso de la contraseña
function ValidarContra() {
    var password = document.entradas.password.value;
    if (password == null || password == "" || password.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de contraseña");
        return 0;
    } else {
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
    addEventHandler(document.entradas.apellido, 'keypress', inputAlphanumericOnly);
    //manda a llamar la funcion de verificacion de correo
    var boton = document.getElementById("btnRegistrar");
    if (boton.addEventListener) {
        boton.addEventListener("click", ValidarNombre, false);
        boton.addEventListener("click", ValidarEmail, false);
        boton.addEventListener("click", ValidarNumTel, false);
        boton.addEventListener("click", ValidarDireccion, false);
        boton.addEventListener("click", ValidarDUI, false);
        boton.addEventListener("click", ValidarNIT, false);
        boton.addEventListener("click", ValidarContra, false);
    }
    else if (boton.attachEvent) {
        boton.addEventListener("onclick", ValidarNombre, false);
        boton.addEventListener("onclick", ValidarEmail, false);
        boton.addEventListener("onclick", ValidarNumTel, false);
        boton.addEventListener("onclick", ValidarDireccion, false);
        boton.addEventListener("onclick", ValidarDUI, false);
        boton.addEventListener("onclick", ValidarNIT, false);
        boton.attachEvent("onclick", ValidarContra);
    }
}
if (window.addEventListener) {
    window.addEventListener('load', init, false);
}
else if (window.attachEvent) {
    window.attachEvent('load', init);
}