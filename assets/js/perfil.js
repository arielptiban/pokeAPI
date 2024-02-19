document.addEventListener("DOMContentLoaded", recuperoValores);

if(!sessionStorage.getItem('correo')){
    window.location.href = './login.html'
}

function recuperoValores(){

    const nombres = document.getElementById("nombres");
    const apellidos = document.getElementById("apellidos");
    const correo = document.getElementById('correo');

    nombres.value = localStorage.getItem('nombres')
    apellidos.value = localStorage.getItem('apellidos')

    correo.value = localStorage.getItem('correo');

}


let button = document.getElementById('boton')

button.addEventListener('click', registro)

function prueba (){
    alert('hola')
}

function registro(){

    const nombre = document.getElementById('nombres');
    const apellido = document.getElementById('apellidos');
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
    const Rcontrasena = document.getElementById('Rcontrasena');

    if(nombre.value === ''){
        nombre.focus();
        nombre.style.boxShadow = '0 0 10px red' 
        nombre.style.boxShadow = '0 0 10px red'
        error('Nombre es un campo obligatorio');
    }
    else if (apellido.value === ''){
        apellido.focus();
        apellido.style.boxShadow = '0 0 10px red' 
        apellido.style.boxShadow = '0 0 10px red'
        error('Apellido es un campo obligatorio');

    }
    else if (correo.value === ''){
        correo.focus();
        correo.style.boxShadow = '0 0 10px red' 
        correo.style.boxShadow = '0 0 10px red'
        error('Correo es un campo obligatorio');
    }
    else if(!validaEmail(correo.value)){
        correo.focus();
        correo.style.boxShadow = '0 0 10px red' 
        correo.style.boxShadow = '0 0 10px red'
        error('Formato de correo incorrecto');
    }
    else if (contrasena.value === ''){
        contrasena.focus();
        contrasena.style.boxShadow = '0 0 10px red' 
        contrasena.style.boxShadow = '0 0 10px red'
        error('Contraseña es un campo obligatorio');
    }
    else if (Rcontrasena.value === ''){
        Rcontrasena.focus();
        Rcontrasena.style.boxShadow = '0 0 10px red' 
        Rcontrasena.style.boxShadow = '0 0 10px red'
        error('Repetir contraseña es obligatorio');
    } 
    else if (!contras (contrasena.value, Rcontrasena.value)) {
        Rcontrasena.focus();
        Rcontrasena.style.boxShadow = '0 0 10px red' 
        Rcontrasena.style.boxShadow = '0 0 10px red'
        error('Las contraseñas no coinciden');
    }
    
    else {

        Swal.fire({
            title: "¿Seguro que quieres actualizar los datos?",
            text: "Deberás iniciar sesión nuevamente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, actualizar",
            cancelButtonText: "Cancelar",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Datos actualizados",
                text: "Vuelve a iniciar sesión",
                icon: "success"
              });
            }

            localStorage.setItem("nombres", nombre.value)
            localStorage.setItem("apellidos", apellido.value)
            localStorage.setItem("correo", correo.value);
            localStorage.setItem("contra", contrasena.value)
  
            setTimeout(()=>{
              window.location.href = 'login.html';
              sessionStorage.clear()
            }, 2000)

          });





    }

}

//Validacion de email
function validaEmail(email) {
    // Expresión regular para validar un correo electrónico
    const exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return exp.test(email);
}

//comparacion de contraseñas
function contras (contra, rcontra){
    if(contra === rcontra){
        return true
    }else{
        return false
    }
}

//errores animados con SweetAlert

function error (msg){

    Swal.fire({
        title: 'Error',
        text: msg,
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })

}

let salir = document.getElementById('salir')

salir.addEventListener('click', cerrar);

function cerrar() {
    sessionStorage.clear()
    window.location.href("index.html")
}