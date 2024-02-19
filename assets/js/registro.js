

if(localStorage.getItem('correo')){
    window.location.href = 'login.html'
}

let button = document.querySelector('button')

button.addEventListener('click', registro)

//Validacion de campos
//SessionStorage y LocalStorage

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
            title: 'Registro exitoso',
            text: 'Inicia sesión',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          })

          localStorage.setItem("nombres", nombre.value)
          localStorage.setItem("apellidos", apellido.value)
          localStorage.setItem("correo", correo.value);
          localStorage.setItem("contra", contrasena.value)

          setTimeout(()=>{
            window.location.href = 'login.html'
          }, 2000)

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

