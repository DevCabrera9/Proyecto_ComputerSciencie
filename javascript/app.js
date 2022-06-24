document.addEventListener('DOMContentLoaded', function(){
    iniciarApp()
})

function iniciarApp(){
    crearHtml()
    buscarPokemon()
}
let json = JSON.parse(poke_file)
let personajes = json.results



const crearHtml = () => {
    const content = document.querySelector('#content')
    personajes.forEach((miPersonaje) => {
        const contenedorHijo = document.createElement('DIV')
        contenedorHijo.classList.add('contenedor', 'tarjetas')
        contenedorHijo.innerHTML=
        `
        <h1>${miPersonaje.name}</h1>
        <img src="${miPersonaje.ThumbnailImage}" alt="">
        <h3>Habilidades</h3>
        <p>${miPersonaje.abilities}</p>
        <h3>Debilidades</h3>
        <p>${miPersonaje.weakness}</p>
        `
        content.appendChild(contenedorHijo)
    });
}

function buscarPokemon (){
    const buscador = document.querySelector('#buscador')
    const btnBusqueda = document.querySelector('#btnBusqueda')
    btnBusqueda.addEventListener("click", function(e){
        let validacion = false
        for(let i = 0; i<personajes.length; i++){
            if(buscador.value == personajes[i].name || buscador.value == personajes[i].slug){
                validacion = true
                modalPersonaje(personajes[i], validacion)
            }
        }
        if(validacion == false){
            alert('Este pokemon no esta')
        }
            
    })
}

function modalPersonaje(pokemon, validar){
    const modalContenedor = document.querySelector('#modalContenedor')
    const modalPokemon = document.querySelector('#modalPokemon')
    if (validar == true){
        modalContenedor.classList.add('show')
        modalPokemon.innerHTML = 
        `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.ThumbnailImage}" alt="">
        <h3>Habilidades</h3>
        <p>${pokemon.abilities}</p>
        <h3>Debilidades</h3>
        <p>${pokemon.weakness}</p>
        <h3>Ancho</h3>
        <p>${pokemon.weight} cm</p>
        <h3>Altura</h3>
        <p>${pokemon.height} cm</p>
        `
    }
    modalContenedor.addEventListener('click', function(e){
        e.preventDefault()
        modalContenedor.classList.remove('show')
    })

}


// || buscador.value == personajes[i].slug


