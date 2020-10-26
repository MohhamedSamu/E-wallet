let usuarios = [];
function usuario(
  nombre,
  apellido,
  correo,
  contra,
  direccion,
  dui,
  nit,
  cel,
  fechaNac
) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.contra = contra;
  this.direccion = direccion;
  this.dui = dui;
  this.nit = nit;
  this.cel = cel;
  this.fechaNac = fechaNac;

  this.guardarCuenta = () => {
    if (localStorage.getItem("users")) {
      usuarios = JSON.parse(localStorage.getItem("users"));
      let newUser = {
        id: usuarios.length,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contra: this.contra,
        direccion: this.direccion,
        dui: this.dui,
        nit: this.nit,
        cel: this.cel,
        fechaNac: this.fechaNac,
      };
      let errorMessage = "";
      let errorState = false;
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nit == newUser.nit) {
          errorMessage = "Este NIT ya ha sido utilizado";
          errorState = true;
        }
        if (usuarios[i].dui == newUser.dui) {
          errorMessage = "Este DUI ya ha sido utilizado";
          errorState = true;
        }
        if (usuarios[i].correo == newUser.correo) {
          errorMessage = "Este correo ya ha sido utilizado";
          errorState = true;
        }
      }
      if (!errorState) {
        usuarios.push(newUser);
        localStorage.setItem("users", JSON.stringify(usuarios));
        iniciarSesion(this.contra, this.correo);
      } else {
        alert(errorMessage);
      }
    } else {
      let newUser = {
        id: 0,
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        contra: this.contra,
        direccion: this.direccion,
        dui: this.dui,
        nit: this.nit,
        cel: this.cel,
        fechaNac: this.fechaNac,
      };
      usuarios = [newUser];
      localStorage.setItem("users", JSON.stringify(usuarios));
      iniciarSesion(this.contra, this.correo);
      window.location.replace("./cuentas.html");
    }
  };
}
this.iniciarSesion = (contra, correo) => {
  usuarios = JSON.parse(localStorage.getItem("users"));
  let errorMessage = "";
  let errorState = true;
  let user;
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].correo == correo) {
      if (usuarios[i].contra == contra) {
        user = usuarios[i];
        sessionStorage.setItem("sesionActual", JSON.stringify(user));
        errorState = false;
      } else {
        errorMessage = "Contraseña Incorrecta";
      }
    } else {
      errorMessage = "Correo Incorrecto";
    }
  }
  if (errorState) alert(errorMessage);
};

if (document.getElementById("btnRegistrar")) {
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const correo = document.getElementById("correo");
  const telefono = document.getElementById("telefono");
  const direccion = document.getElementById("direccion");
  const dui = document.getElementById("dui"); 
  const nit = document.getElementById("nit");
  const fecha_nacimiento = document.getElementById("fecha_nacimiento");
  const contrasena = document.getElementById("password");
  const btnRegistrar = document.getElementById("btnRegistrar");

  btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    var re = null;
    var bandera = false;
    if (bandera == false){
      if (this.nombre.value == null || this.nombre.value == "" || this.nombre.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de nombre");
        bandera = false;
        return 0;
      }else{
        bandera = true;
      }
      if (this.apellido.value == null || this.apellido.value == "" || apellido.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Apellido");
        bandera = false;
        return 0;
      }else{
        bandera = true;
      }
      if (this.correo.value == null || this.correo.value == "" || this.correo.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de correo");
        bandera = false;
        return 0;
      }else{
        re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
        if (!re.test(this.correo.value))
        {
          alert("El correo es invalido, Ingrese uno correcto");
          bandera = false;
        }else{
          bandera = true;
        }
      }
      if (this.telefono.value == null || this.telefono.value == "" || this.telefono.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Teléfono");
        bandera = false;
        return 0;
      }else{
        re = /^[0-9]{4}-?[0-9]{4}$/;
        if (!re.test(this.telefono.value)) {
          alert("El número de teléfono es invalido, Ingrese uno correcto");
          bandera = false;
        }else{
          bandera = true;
        }
      }
      if (this.direccion.value == null || this.direccion.value == "" || this.direccion.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Direccion");
        bandera = false;
        return 0;
      }else{
        bandera = true;
      }
      if (this.dui.value == null || this.dui.value == "" || this.dui.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de DUI");
        bandera = false;
        return 0;
      }else{
        re = /^[0-9]{8}-?[0-9]{1}$/;
        if (!re.test(this.dui.value)) {
          alert("El número de DUI es invalido, Ingrese uno correcto, recuerde agregar el guión");
          bandera = false;
        }else{
          bandera = true;
        }
      }
      if (this.nit.value == null || this.nit.value == "" || this.nit.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de NIT");
        bandera = false;
        return 0;
      }else{
        re = /^[0-9]{4}-?[0-9]{6}-?[0-9]{3}-?[0-9]{1}$/;
        if (!re.test(this.nit.value)) {
          alert("El número de NIT es invalido, Ingrese uno correcto, recuerde agregar los guiones");
          bandera = false;
        }else{
          bandera = true;
        }
      }
      if (this.fecha_nacimiento.value == null || this.fecha_nacimiento.value == "" || this.fecha_nacimiento.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de Fecha de Nacimiento");
        bandera = false;
        alert(this.fecha_nacimiento.value);
        return 0;
      }else{
        bandera = true;
      }
      if (this.password.value == null || this.password.value == "" || this.password.value.length == 0) {
        alert("No se ha ingresado ningún valor en el campo de contraseña");
        bandera = false;
        return 0;
      } else {
        re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/;
        if (!re.test(this.password.value)) {
          alert(
            "Su contraseña debe ser de 8 a 15 caracteres y deben incluir una letra mayúscula, minúscula y un numero"
          );
          bandera = false;
        }else{
          bandera = true;
        }
      }
    }
    if (bandera){
      var nuevaCuenta = new usuario(
        this.nombre.value,
        this.apellido.value,
        this.correo.value,
        this.contrasena.value,
        this.direccion.value,
        this.dui.value,
        this.nit.value,
        this.telefono.value,
        this.fecha_nacimiento.value
      );
      nuevaCuenta.guardarCuenta();
    }
  });
}

function inputAlphanumericOnly(e) {
  var evt = e ? e : event;
  var keyCode = evt.which ? evt.which : evt.keyCode;
  //alert("Código de tecla presionada " + keyCode);
  if (
    (keyCode < 65 || keyCode > 90) &&
    (keyCode < 97 || keyCode > 122) &&
    keyCode != 225 &&
    keyCode != 193 &&
    keyCode != 233 &&
    keyCode != 201 &&
    keyCode != 237 &&
    keyCode != 205 &&
    keyCode != 243 &&
    keyCode != 211 &&
    keyCode != 250 &&
    keyCode != 218 &&
    keyCode != 241 &&
    keyCode != 209 &&
    keyCode != 252 &&
    keyCode != 220 &&
    keyCode != 161 &&
    keyCode != 33 &&
    keyCode != 191 &&
    keyCode != 63 &&
    keyCode != 34 &&
    keyCode != 46 &&
    keyCode != 44 &&
    keyCode != 59 &&
    keyCode != 8 &&
    keyCode != 13 &&
    keyCode != 27 &&
    keyCode != 32
  ) {
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
  } else if (elem.attachEvent) {
    elem.attachEvent("on" + eventType, handler);
  } else {
    return 0;
  }
  return 1;
}

if (document.getElementById("btnIniciarSesion")) {
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const contraLogin = document.getElementById("password");
  const correoLogin = document.getElementById("correo");
  btnIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    this.iniciarSesion(contraLogin.value, correoLogin.value);
    sesionActual = sessionStorage.getItem("sesionActual")
    cuentas = localStorage.getItem("cuentas")
    cuentaActual = cuentas.forEach(element => {
      if (element.idusuario === sesionActual.id){
        return element
      }
    });
    sessionStorage.setItem("cuentaActual", cuentaActual)
    window.location.replace("./index.html");
  });
}
