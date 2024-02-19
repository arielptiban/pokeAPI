if(!sessionStorage.getItem('correo')){
    window.location.href = './login.html'
}

//Recuperar y utilizar el valor del LocalStorage

let nombre = document.getElementById('nombre')
let usuario = localStorage.getItem('nombres')  +' ' + localStorage.getItem('apellidos')

nombre.innerHTML = `Bienvenido <strong> ${usuario}</strong>`

let salir = document.getElementById('salir')

//cerrar sesión

salir.addEventListener('click', cerrar);

function cerrar() {
    sessionStorage.clear()
    window.location.href("index.html")
}
