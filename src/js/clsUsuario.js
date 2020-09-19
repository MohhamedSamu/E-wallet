//Creando una clase rectángulo
function usuario(nombre, apellido,correo,contra,direccion,dui,nit,cel,fechaNac) {
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.contra = contra;
    this.direccion = direccion;
    this.dui = dui;
    this.nit = nit;
    this.cel = cel;
    this.fechaNac = fechaNac;
    //Métodos de la clase 
    //valida que todos los campos esten llenos 
    this.validar = function () {
        if (this.nombre != "") {
            if (this.apellido != "") {
                if (this.correo != "") {
                    if (this.contra != "") {
                        if (this.direccion != "") {
                            if (this.dui != "") {
                                if (this.nit != "") {
                                    if (this.cel != "") {
                                        if (this.fechaNac != "") {
                                            return true;
                                        }
                                        else{
                                            alert("Fecha de nacimiento aun no asignado")
                                        }
                                    }
                                    else{
                                        alert("Celular aun no asignado")
                                    }
                                }
                                else{
                                    alert("NIT aun no asignado")
                                }
                            }
                            else{
                                alert("DUI aun no asignado")
                            }
                        }
                        else{
                            alert("Direccion aun no asignado")
                        }
                    }
                    else{
                        alert("Contraseña aun no asignado")
                    }
                }
                else{
                    alert("correo aun no asignado")
                }
            }
            else{
                alert("Apellido aun no asignado")
            }
        }
        else{
            alert("Nombre aun no asignado")
        }
        return false;
    }
}
