if (!sessionStorage.getItem("cuentaActual")) {
  if (localStorage.getItem("cuentas")) {
    let sesionActual = JSON.parse(sessionStorage.getItem("sesionActual"));
    let cuentas = JSON.parse(localStorage.getItem("cuentas"));
    cuentaActual = cuentas.forEach((element) => {
      if (element.idusuario === sesionActual.id) {
        return element;
      }
    });
    if (!cuentaActual) {
      cuentaActual = new cuenta(sesionActual.id);
      cuentas.push(cuentaActual);
      localStorage.setItem("cuentas", JSON.stringify(cuentas));
    }
    sessionStorage.setItem("cuentaActual", JSON.stringify(cuentaActual));
  } else {
    cuentaActual = new cuenta(sesionActual.id);
    localStorage.setItem("cuentas", JSON.stringify([cuentaActual]));
    sessionStorage.setItem("cuentaActual", JSON.stringify(cuentaActual));
  }
}
if (document.getElementById("efectivo")){
  cuentaActual = JSON.parse(sessionStorage.getItem("cuentaActual"))
  document.getElementById("efectivo").innerText = $ + cuentaActual.efectivo
}
function cuenta(id) {
  this.efectivo = 0;
  this.idusuario = id;
  this.cuentaBancarias = [];
  this.tarjetasDeCredito = [];
  this.validarCuenta = function (banco, cuenta, saldo) {
    if (banco != "") {
      if (cuenta != "") {
        if (saldo > 0) {
          this.cuentaBancarias.push({
            banco: banco,
            numCuenta: cuenta,
            saldo: saldo,
          });
          this.efectivo += this.saldo;
        } else {
          alert("El saldo tiene que ser superior a 0");
        }
      } else {
        alert("El numero de cuenta aun no ha sido asignado");
      }
    } else {
      alert("El nombre del banco aun no asignado");
    }
    return false;
  }; //final ingreso de valores de cuenta

  this.getEfectivo = function () {
    return this.efectivo;
  };

  this.validarTarjeta = function (
    banco,
    num_tarjeta,
    saldo,
    interes,
    fecha_vencimiento
  ) {
    if (banco != "") {
      if (num_tarjeta != "") {
        if (interes > 0) {
          if (fecha_vencimiento != 0) {
            if (saldo > 0) {
              this.tarjetasDeCredito.push({
                banco: banco,
                numTarjeta: num_tarjeta,
                saldo: saldo,
                interes: interes,
                fechaVencimiento: fecha_vencimiento,
              });
              this.efectivo += saldo;
            }
          } else {
            alert("Fecah de vencimiento no valida");
          }
        } else {
          alert("El interes tiene que ser mayor a 0");
        }
      } else {
        alert("El numero de Tarjeta aun no ha sido asignado");
      }
    } else {
      alert("El nombre del banco aun no asignado");
    }
  }; //final de ingreso de tarjeta de credito

  // this.ingreso = function(metodoPago, efectivo){
  //   if (metodoPago == "tarjeta"){

  //   }
  //   this.efectivo += efectivo;
  // }
}
//cuenta de banco
const nombre_banco = document.getElementById("nombre_banco");
const num_cuenta = document.getElementById("num_cuenta");
const saldo_act = document.getElementById("saldo_act");

if (document.getElementById("btnIngresarTarjeta")) {
  const btn = document.getElementById("btnIngresarTarjeta");
  const nombre_banco_T = document.getElementById("nombre_banco_T");
  const num_tarjeta = document.getElementById("num_tarjeta");
  const saldo_act_T = document.getElementById("saldo_act_T");
  const interes = document.getElementById("interes");
  const Fecha_pago = document.getElementById("Fecha_pago");
  let cuentasUpdate;
  btn.addEventListener("click", () => {
    cuentaActual.validarTarjeta(
      nombre_banco_T,
      num_tarjeta,
      saldo_act_T,
      interes,
      Fecha_pago
    );
    cuentas.forEach((element) => {
      if (element.idusuario === sesionActual.id) {
        cuentasUpdate.push(cuentaActual);
      } else {
        cuentasUpdate.push(element);
      }
    });
    localStorage.setItem("cuentas", JSON.stringify(cuentasUpdate));
    sessionStorage.setItem("cuentaActual", JSON.stringify(cuentasUpdate));
  });
}