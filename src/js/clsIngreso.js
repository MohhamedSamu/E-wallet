// if (!sessionStorage.getItem("cuentaActual")) {
//   if (localStorage.getItem("ingresos")) {
//     let sesionActual = JSON.parse(sessionStorage.getItem("sesionActual"));
//     let ingresos = JSON.parse(localStorage.getItem("ingresos"));
//     cuentaActual = ingresos.forEach((element) => {
//       if (element.idusuario === sesionActual.id) {
//         return element;
//       }
//     });
//   } else {
// cuentaActual = new ingresos(sesionActual.id);
// localStorage.setItem("ingresos", JSON.stringify([cuentaActual]));
// sessionStorage.setItem("cuentaActual", JSON.stringify(cuentaActual));
//   }
// }

function ingreso(id, fecha, motivo, monto, tipo, cuenta) {
  this.idusuario = id;
  this.fecha = fecha;
  this.motivo = motivo;
  this.monto = monto;
  this.tipo = tipo;
  this.cuenta = cuenta;
}

if (document.getElementById("Agregar")) {
  const btn = document.getElementById("Agregar");
  const motivo_ingreso = document.getElementById("Motivo");
  const monto_ingreso = document.getElementById("Monto");
  const tipo_ingreso = document.getElementById("Tipo_pago");
  const cuenta_ingreso = document.getElementById("selectCuentas");
  cuentaActual = JSON.parse(sessionStorage.getItem("cuentaActual"));
  if (tipo_ingreso.value == "tipo_cuenta") {
    if (!cuentaActual.cuentaBancarias.length) {
      cuentaActual.cuentaBancarias.forEach((element) => {
        nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = element.numCuenta;
        nuevaOpcion.innerText = element.numCuenta + ", " + element.banco;
        cuenta_ingreso.innerText = "";
        cuenta_ingreso.appendChild(nuevaOpcion);
      });
    } else {
      cuenta_ingreso.innerText = "No hay tarjetas disponibles";
    }
  } else if (tipo_ingreso.value == "tipo_tarjeta") {
    if (!cuentaActual.tarjetasDeCredito.length) {
      cuentaActual.tarjetasDeCredito.forEach((element) => {
        nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = element.num_tarjeta;
        nuevaOpcion.innerText = element.num_tarjeta + ", " + element.banco;
        cuenta_ingreso.innerText = "";
        cuenta_ingreso.appendChild(nuevaOpcion);
      });
    } else {
      cuenta_ingreso.innerText = "No hay tarjetas disponibles";
    }
  }
  btn.addEventListener("click", () => {
    let ingresos = JSON.parse(localStorage.getItem("ingresos"));
    usuarioActual = JSON.parse(sessionStorage.getItem("usuarioActual"));
    let hoy = new Date();
    nuevoIngreso = new ingreso(
      usuarioActual.id,
      hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear(),
      motivo_ingreso.value,
      monto_ingreso.value,
      tipo_ingreso.value,
      cuenta_ingreso.value
    );
    ingresos.push(nuevoIngreso);
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
  });
}
