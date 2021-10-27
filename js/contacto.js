function validar(){
    var form =document.form;

    if(form.nombre_apellido.value==0){
        alert("El campo nombre esta vacio");
        form.nombre_apellido.value="";
        form.nombre_apellido.focus();
        return false;
    }

    if(form.email.value==0){
        alert("El campo email esta vacio");
        form.email.value="";
        form.email.focus();
        return false;
    }

    if(form.mensaje.value==0){
        alert("El campo mensaje esta vacio");
        form.mensaje.value="";
        form.mensaje.focus();
        return false;
    }
    alert("Datos enviados con exito");
    form.submit;
}