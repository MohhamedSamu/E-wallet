//Creando una clase rectángulo
function cuenta() {
    //Propiedades de la clase
    this.banco = null;
    this.num_cuenta = null;
    this.saldo = null;
    this.num_tarjeta = null;
    this.interes = null;
    this.pago = null;
    this.pago_tar = null;
    this.fecha_vencimiento = null;
    //Métodos de la clase 
    //valida si todos los campos esten llenos y que el saldo sea mayor a 0 y si todo es correcto devuelve true
    this.Efectivo = function (){
        this.efec = efec;
    }
    this.cuentasBancarias = function(banco, num_cuenta, saldo){
        this.banco = banco;
        this.num_cuenta= num_cuenta;
        this.saldo= saldo;
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
    this.tarjetas = function( num_tarjeta, interes, fecha_vencimiento, pago_tar){
        this.num_tarjeta= num_tarjeta;
        this.interes= interes;
        this.fecha_vencimiento=fecha_vencimiento;
        this.pago_tar= pago_tar;
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
