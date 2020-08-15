const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/';
var variableGlobal = 123;

function findPokemonById() {
    
    let indexPokemonOne = document.querySelector('#indexOne').value
    let indexPokemonTwo = document.querySelector('#indexTwo').value
    let indexPokemonThree = document.querySelector('#indexThree').value

    if (indexPokemonOne && indexPokemonTwo && indexPokemonThree) {
        
        let pokeContainer = document.querySelector('.poke-container'); // parent
        pokeContainer.innerHTML = "";

        fetch(POKEMON_API + indexPokemonOne)
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                drawPokemon(poke)
                return fetch(POKEMON_API + indexPokemonTwo)
            })
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                drawPokemon(poke)
                return fetch(POKEMON_API + indexPokemonThree)
            })
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                drawPokemon(poke)
            })
            .then()
            .catch(err => console.error('Something bad happened with your link: ' + err))
    } else {
        alert('all required')
    }
}

function drawPokemon(pokemon) {    
    
    let pokeCardTitle = document.createElement('h2')
    pokeCardTitle.className = 'poke-name'
    pokeCardTitle.innerHTML = pokemon.name
    
    let pokeCardImg = document.createElement('img')
    pokeCardImg.setAttribute('src', pokemon.sprites.front_default)
    
    let pokeCard = document.createElement('div');
    pokeCard.className = 'poke-card'
    pokeCard.appendChild(pokeCardTitle)
    pokeCard.appendChild(pokeCardImg)
    
    let pokeContainer = document.querySelector('.poke-container'); // parent
    pokeContainer.appendChild(pokeCard)

}
// pokeIndexInput()

var searchBtn = document.querySelector('#searchBtnId')
searchBtn.addEventListener('click', findPokemonById)
