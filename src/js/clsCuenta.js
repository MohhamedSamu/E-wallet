function cuenta() {
  this.efectivo = 0;
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
  };//final ingreso de valores de cuenta
  this.validarTarjeta = function (banco,num_tarjeta, saldo, interes,fecha_vencimiento) {
    if (banco != "") {
      if (num_tarjeta != "") {
        if (interes > 0) {
          if (fecha_vencimiento != 0) {
            if (saldo > 0) {
              this.tarjetasDeCredito.push({
                banco: banco,
                numTarjeta: num_tarjeta,
                saldo:saldo,
                interes:interes,
                fechaVencimiento:fecha_vencimiento
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
  };//final de ingreso de tarjeta de credito 
}
var nuevaCuenta = new cuenta();
if (localStorage.getItem("cuenta")){
  var nuevaCuenta = JSON.parse(localStorage.getItem("cuenta"));
  document.getElementById("efectivo").innerText = nuevaCuenta.efectivo;
}else{
  localStorage.setItem("cuenta",nuevaCuenta)
}
//tarjeta de credito
const banco_T = document.getElementById("nombre_banco_T")
const num_tarjeta = document.getElementById("num_tarjeta")
const saldo_act_T = document.getElementById("saldo_act_T")
const interes = document.getElementById("interes")
const Fecha_pago = document.getElementById("Fecha_pago")

//cuenta de banco
const nombre_banco = document.getElementById("nombre_banco")
const num_cuenta = document.getElementById("num_cuenta")
const saldo_act = document.getElementById("saldo_act")
document.getElementById("btnIngresarTarjeta").addEventListener("click",()=>{
  nuevaCuenta.validarTarjeta(banco_T.value,num_tarjeta.value,saldo_act_T.value,interes.value,Fecha_pago.value)
  localStorage.setItem("cuenta",nuevaCuenta)
})
document.getElementById("btnIngresarCuenta").addEventListener("click",()=>{
  nuevaCuenta.validarCuenta(nombre_banco.value,num_cuenta.value,saldo_act.value);
  localStorage.setItem("cuenta",nuevaCuenta)
})
