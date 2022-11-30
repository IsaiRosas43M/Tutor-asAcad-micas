function validar(){
//alert("Proceso de validación");
var usuario = document.getElementById('username').value;
var contrasena = document.getElementById('password').value;
var msg="";
//validar los campos
if (usuario == "" || contrasena == ""){
    msg="Proporcione su usuario y contraseña";
    document.getElementById('mensajes').innerHTML = msg;
    document.getElementById('mensajes').style.color="#ff0000"
    //Que no actualice la pagina y no avance
    event.preventDefault();
    return false;

}else{
    
    if(usuario =="webmaster" && contrasena =="123456"){
        return true;
    }else{
        msg="Verifique usurio y contraseña";
        document.getElementById('mensajes').innerHTML = msg;
    document.getElementById('mensajes').style.color="#ff0000"
    //Que no actualice la pagina y no avance
    event.preventDefault();
    return false;

    }
}
}