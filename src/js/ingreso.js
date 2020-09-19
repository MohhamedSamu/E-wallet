//Registrar evento click del ratón al presionar botones de envío
function Agregar(){
    var showinfo = document.getElementById("Agregar");
    if(showinfo.addEventListener){
    showinfo.addEventListener("click", function(){
        ingreso.validar();
    }, false);
    }
    else if(showinfo.attachEvent){
    showinfo.attachEvent("onclick", function(){
    ingreso.validar();
    });
    }
}//creamos objeto
var ingreso = new Object();
//propiedades del objeto
ingreso.fecha ="";
ingreso.motivo = "";
ingreso.monto ="";
ingreso.cuenta = "";
//funcion para mostrar
ingreso.mostrar = function(fecha,motivo,monto,cuenta){
    alert("mostrar");
    //aqui es donde se guardan y muestran los datos
    ingreso.fecha= fecha;
    ingreso.motivo= motivo;
    ingreso.monto= monto;
    ingreso.cuenta= cuenta;
    alert(ingreso.fecha);
    alert(ingreso.motivo);
    alert(ingreso.monto);
    alert(ingreso.cuenta);
}
// Funciones de ingreso valida si todos los datos tienen algo
ingreso.validar = function(){
    var fecha =document.frmIngreso.fecha.value; 
    var motivo = document.frmIngreso.motivo.value;
    var monto = document.frmIngreso.monto.value;
    var cuenta = document.frmIngreso.num_cuenta.value;
        if(fecha != ""){
            if(motivo != ""){
                if(monto != ""){
                    if(cuenta != ""){
                        ingreso.mostrar(fecha,motivo,monto,cuenta);
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
    window.addEventListener("load", Agregar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", Agregar);
    }