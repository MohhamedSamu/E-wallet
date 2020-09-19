//Registrar evento click del ratón al presionar botones de envío
function Agregar(){
    var showinfo = document.getElementById("agregar");
    if(showinfo.addEventListener){
    showinfo.addEventListener("click", function(){
    gasto.validar(document.frmGasto.Fecha.value, document.frmGasto.Motivo.value, document.frmGasto.Monto.value, document.frmGasto.Cuenta.value);
    }, false);
    }
    else if(showinfo.attachEvent){
    showinfo.attachEvent("onclick", function(){
        gasto.validar(document.frmGasto.Fecha.value, document.frmGasto.Motivo.value, document.frmGasto.Monto.value, document.frmGasto.Cuenta.value);
        });
    }
}//creamos objeto
var gasto = new Object();
//propiedades del objeto
gasto.fecha ="";
gasto.motivo = "";
gasto.monto ="";
gasto.cuenta = "";
//funcion para mostrar
gasto.mostrar = function(fecha, motivo, monto, cuenta){
    //aqui es donde se muestan los datos
    alert(fecha);
    alert(motivo);
    alert(monto);
    alert(cuenta);
}
// Funciones de gasto valida si todos los datos tienen algo
gasto.validar = function(fecha, motivo, monto, cuenta){
    gasto.fecha= fecha;
    gasto.motivo= motivo;
    gasto.monto= monto;
    gasto.cuenta= cuenta;
        if(gasto.fecha != ""){
            if(gasto.motivo != ""){
                if(gasto.monto != ""){
                    if(gasto.cuenta != ""){
                        gasto.mostrar(gasto.fecha,gasto.motivo,gasto.monto, gasto.cuenta);//se muestran los nuevos valores ya ingresados
                    }else{
                        alert("Cuenta no ingresada");
                        }
                }else{
                    alert("Monto no ingresada");
                    }
            }else{
                alert("Motivo no ingresada");
                }
        }else{
        alert("Fecha no ingresada");
        }
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }