function usuario(nombre, apellido,correo,contra,direccion,dui,nit,cel,fechaNac) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contra = contra;
    this.direccion = direccion;
    this.dui = dui;
    this.nit = nit;
    this.cel = cel;
    this.fechaNac = fechaNac;
    this.mostrar = function () {
        alert("ola "+ nombre)
    }
}

const btnRegistrar = document.getElementById("btnRegistrar");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const dui = document.getElementById("dui");
const nit = document.getElementById("nit");
const fecha_nacimiento = document.getElementById("fecha_nacimiento");
const contrasena = document.getElementById("password");

btnRegistrar.addEventListener("click", () => {
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
  nuevaCuenta.mostrar();        
});