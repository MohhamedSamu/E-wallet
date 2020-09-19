//Registrar evento click del ratón al presionar botones de envío
function Agregar(){
    var showinfo = document.getElementById("agregar");
    if(showinfo.addEventListener){
    showinfo.addEventListener("click", function(){
    ingreso.validar(document.frmIngreso.Fecha.value, document.frmIngreso.Motivo.value, document.frmIngreso.Monto.value, document.frmIngreso.Cuenta.value);
    }, false);
    }
    else if(showinfo.attachEvent){
    showinfo.attachEvent("onclick", function(){
    ingreso.validar(document.frmIngreso.Fecha.value, document.frmIngreso.Motivo.value, document.frmIngreso.Monto.value, document.frmIngreso.Cuenta.value);
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
ingreso.mostrar = function(fecha, motivo, monto, cuenta){
    //aqui es donde se muestan los datos
    alert(fecha);
    alert(motivo);
    alert(monto);
    alert(cuenta);
}
// Funciones de ingreso valida si todos los datos tienen algo
ingreso.validar = function(fecha, motivo, monto, cuenta){
    ingreso.fecha= fecha;
    ingreso.motivo= motivo;
    ingreso.monto= monto;
    ingreso.cuenta= cuenta;
        if(ingreso.fecha != ""){
            if(ingreso.motivo != ""){
                if(ingreso.monto != ""){
                    if(ingreso.cuenta != ""){
                        ingreso.mostrar(ingreso.fecha,ingreso.motivo,ingreso.monto, ingreso.cuenta);
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