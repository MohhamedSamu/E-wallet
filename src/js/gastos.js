function Agregar(){
    var showinfo = document.getElementById("Agregar");
    if(showinfo.addEventListener){
        showinfo.addEventListener("click", function(){
            gasto.validar();
        }, false);
    }
    else if(showinfo.attachEvent){
        showinfo.attachEvent("onclick", function(){
            gasto.validar();
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
gasto.mostrar = function(fecha, motivo, monto/*, cuenta*/){
    //aqui es donde se agregan y muestan los datos
    gasto.fecha= fecha;
    gasto.motivo= motivo;
    gasto.monto= monto;
    //gasto.cuenta= cuenta;
    alert(gasto.fecha);
    alert(gasto.motivo);
    alert(gasto.monto);
    //alert(gasto.cuenta);
}
// Funciones de gasto valida si todos los datos tienen algo
gasto.validar = function(){
    var f = new Date();
    var fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    var motivo = document.frmGasto.motivo.value;
    var monto = document.frmGasto.monto.value;
    //var cuenta = document.frmGasto.cuenta.value;
        if(fecha != ""){
            if(motivo != ""){
                if(monto != ""){
                    //if(cuenta != ""){
                        gasto.mostrar(fecha,motivo,monto/*,cuenta*/);//se muestran los nuevos valores ya ingresados
                    /*}else{
                        alert("Cuenta no ingresada");
                        }*/ 
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
}else if(window.attachEvent){
    window.attachEvent("onload", Agregar);
}