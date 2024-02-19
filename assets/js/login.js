
if(sessionStorage.getItem('correo')){
    window.location.href = './inicio.html'
}

let button = document.querySelector('button')

button.addEventListener('click', inicio)

function inicio() {

    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');

    if (correo.value === '' || contrasena.value === '') {
        correo.focus();
        correo.style.boxShadow = '0 0 10px red'
        contrasena.style.boxShadow = '0 0 10px red'

        Swal.fire({
            title: 'Error',
            text: 'Los datos son obligatorios',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    } else if (validaEmail(correo.value)) {

        if (correo.value === localStorage.getItem('correo') && contrasena.value === localStorage.getItem('contra')) {

            Swal.fire({
                title: 'Correcto',
                text: 'Bienvenido',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
            sessionStorage.setItem("correo",correo.value)
            sessionStorage.setItem("contra", contrasena.value)
           
            setTimeout(()=>{
                window.location.href = 'inicio.html'
              }, 2000)

        } else {
            correo.focus();
            correo.style.boxShadow = '0 0 10px red';
            contrasena.style.boxShadow = '0 0 10px red'

            Swal.fire({
                title: 'Error',
                text: 'Correo o contraseña incorrectos',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500
            })

        }

    } else {

        correo.focus();
        correo.style.boxShadow = '0 0 10px red'

        Swal.fire({
            title: 'Error',
            text: 'El formato de correo no es valido',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // if(correo.value === 'arielptiban@gmail.com' && contrasena.value === '123'){

    //     correo.style.boxShadow = '0 0 10px green'
    //     contrasena.style.boxShadow = '0 0 10px green'

    //     sessionStorage.setItem("usuario", "arielptiban@gmail.com");
    //     window.location.href = './dashboard.html'

    // }
    // else{

    //     correo.focus()
    //     correo.style.boxShadow = '0 0 10px red'
    //     contrasena.style.boxShadow = '0 0 10px red'

    //     Swal.fire({
    //         title: 'Error',
    //         text: 'Correo o contraseña incorrectos',
    //         icon: 'error',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })

    // }
}

function validaEmail(email) {
    // Expresión regular para validar un correo electrónico
    const exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return exp.test(email);
}