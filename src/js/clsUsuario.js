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
        window.location.replace("./index.html");
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
    var nuevaCuenta = new usuario(
      nombre.value,
      apellido.value,
      correo.value,
      contrasena.value,
      direccion.value,
      dui.value,
      nit.value,
      telefono.value,
      fecha_nacimiento.value
    );
    nuevaCuenta.guardarCuenta();
  });
}


if (document.getElementById("btnIniciarSesion")) {
  const btnIniciarSesion = document.getElementById("btnIniciarSesion");
  const contraLogin = document.getElementById("password");
  const correoLogin = document.getElementById("correo");
  btnIniciarSesion.addEventListener("click", (e) => {
    e.preventDefault();
    this.iniciarSesion(contraLogin.value, correoLogin.value);
  });
}
