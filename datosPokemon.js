
const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            pintarPokemon(data, number);
        })
        .catch(error => {
            console.log(error);
        });
};

const btnSeleccionar = () => {
    let primerPokemon = Math.floor(Math.random() * 150) + 1; 
    let segundoPokemon = Math.floor(Math.random() * 150) + 1;

    while (primerPokemon === segundoPokemon) {
        segundoPokemon = Math.floor(Math.random() * 150) + 1;
    }

    consultarPokemon(primerPokemon, 1);
    consultarPokemon(segundoPokemon, 2);
};

const pintarPokemon = (data, id) => {
    let item = document.querySelector(`#pok-${id}`);
    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);
    item.getElementsByTagName("p")[0].innerHTML = ''; 
};

window.onload = btnSeleccionar;
