//Creando una clase rectángulo
function rectangulo(banco, num_cuenta, saldo, num_tarjeta, interes, fecha_vencimiento, pago_tar) {
    //Propiedades de la clase
    this.banco = banco;
    this.num_cuenta = num_cuenta;
    this.saldo = saldo;
    this.num_tarjeta = num_tarjeta;
    this.interes = interes;
    this.pago = pago;
    this.pago_tar = pago_tar;
    this.fecha_vencimiento = fecha_vencimiento;
    //Métodos de la clase 
    //valida si todos los campos esten llenos y que el saldo sea mayor a 0 y si todo es correcto devuelve true
    this.validarCuenta = function () {
        if (this.banco != "") {
            if (this.cuenta != "") {
                if (this.saldo > 0) {
                    return true;
                }
                else {
                    alert("El saldo tiene que ser superior a 0")
                }
            }
            else {
                alert("El numero de cuenta aun no ha sido asignado")
            }
        }
        else {
            alert("El nombre del banco aun no asignado")
        }
        return false
    }
    this.validarTarjeta = function () {
        if (this.banco != "") {
            if (this.num_tarjeta != "") {
                if (this.interes > 0) {
                    if (this.fecha_vencimiento != 0) {
                        if (this.saldo > 0) {
                            //saldo pasa a ser flotante
                            this.saldo = parseFloat(saldo);
                            //si presiono el checkbox de pagar con sumara el pago al saldo
                            if (this.pago_tar.type === 'checkbox') {
                                this.saldo = this.saldo + this.pago;
                            }
                        }
                    }
                    else {
                        alert("Fecah de vencimiento no valida")
                    }
                }
                else {
                    alert("El interes tiene que ser mayor a 0")
                }
            }
            else {
                alert("El numero de Tarjeta aun no ha sido asignado")
            }
        }
        else {
            alert("El nombre del banco aun no asignado")
        }
    }
}