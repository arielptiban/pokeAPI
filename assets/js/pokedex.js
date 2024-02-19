//controlando rutas
if(!sessionStorage.getItem('correo')){
    window.location.href = './login.html'
}

// CONSUMIR API POKEMON

const lista = document.getElementById('lista');

for (let i = 1; i <= 151; i++) {

    fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        .then(res => res.json())
        .then(data => llenaPokemon(data))
        .catch(e => console.error(new Error(e)));

}   

function llenaPokemon(poke) {

    let id = poke.id.toString();

    // console.log(poke.types)

    const div = document.createElement('div');
    div.classList.add('pokemon');

    let tipos = poke.types.map((tipo) => `<p class="${tipo.type.name} tipo">${tipo.type.name}</p>`);
    tipos = tipos.join('');

    div.innerHTML =

        `
            <p class= 'pokemon-id-back'>#${id}</p>
            <div class='pokemon-imagen'>
                <img src='${poke.sprites.other['official-artwork'].front_default}'>
            </div>

            <div class='pokemon-info'>
                <div class='nombre-contenedor'>
                    <p class='pokemon-id'> #${id} </p>
                    <h2 class='pokemon-nombre'>${poke.name}</h2>
                </div>

                <div class='pokemon-tipos'> ${tipos} </div>

                <div class='pokemon-stats'>
                <p class'stat'>${poke.height} m</p>
                <p class'stat'>${poke.weight} kg</p>

                </div>
            </div>
        `
        lista.append(div);

}

//botones para mostrar pokemon por su tipo

const botonesHeader = document.querySelectorAll(".btn-header");

botonesHeader.forEach(boton => boton.addEventListener("click", (event) => {
    const botonId = event.currentTarget.id;

    lista.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch('https://pokeapi.co/api/v2/pokemon/' + i)
            .then((response) => response.json())
            .then(data => {

                if(botonId === "ver-todos") {
                    llenaPokemon(data);
                } else {
                    const tipos = data.types.map(type => type.type.name);
                    if (tipos.some(tipo => tipo.includes(botonId))) {
                        llenaPokemon(data);
                    }
                }

            })
    }
}))


// cerrar sesión

let salir = document.getElementById('salir')

salir.addEventListener('click', cerrar);

function cerrar() {
    sessionStorage.clear()
    window.location.href("index.html")
}