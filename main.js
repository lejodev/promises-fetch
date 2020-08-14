var endpointsArr = []
endpointsArr.push('some String')
var randomNum = function () {
    console.log(endpointsArr.length);
    return Math.floor(Math.random() * endpointsArr.length) + 1
}
function populateArray() {
    for (let i = 1; i <= 10; i++) {
        endpointsArr.push(i);
    }
}
populateArray()
var link = 'https://pokeapi.co/api/v2/pokemon/'
function raceFetch(endpoint) {

}
var fetch1 = fetch(link + endpointsArr[randomNum()]).then(poke => poke.json())//.then(msg => console.log(`${msg.id} ${msg.name}`))
var fetch2 = fetch(link + endpointsArr[randomNum()]).then(poke => poke.json())//.then(msg => console.log(`${msg.id} ${msg.name}`))
var fetch3 = fetch(link + endpointsArr[randomNum()]).then(poke => poke.json())//.then(msg => console.log(`${msg.id} ${msg.name}`))

function promiseRace() {
    Promise.race([fetch1, fetch2, fetch3]).then(msg => console.log(msg))
}
// promiseRace()

function promiseAll() {
    Promise.all([fetch1, fetch2, fetch3])
        .then(msg => console.log('success'))
        .catch(err => console.error('String cannot be an index'))
}
promiseAll()

var promises = []
function pokeIndexInput() {
    var poke_container = document.querySelector('.poke-container')
    var inputOneValue = document.querySelector('#indexOne').value
    var inputTwoValue = document.querySelector('#indexTwo').value
    var inputThreeValue = document.querySelector('#indexThree').value

    if (inputOneValue && inputTwoValue && inputThreeValue) {
        // var searchPromise = new Promise((resolve, reject) => {
        fetch(link + inputOneValue)
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                promises.push(poke)
                setPokeView(poke)
                return fetch(link + inputTwoValue)
            })
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                promises.push(poke)
                setPokeView(poke)
                return fetch(link + inputThreeValue)
            })
            .then(pokeRaw => pokeRaw.json())
            .then(poke => {
                promises.push(poke)
                setPokeView(poke)
            })
            .then()
            .catch(err => console.error('Something bad happened with your link: ' + err))
    } else {
        alert('all required')
    }
}

function setPokeView(obj) {
    pokeContainer = document.querySelector('.poke-container'); // parent
    pokeCard = document.createElement('div');
    pokeCard.className = 'poke-card'
    pokeCardTitle = document.createElement('h2')
    pokeCardTitle.className = 'poke-name'
    pokeCardTitle.innerHTML = obj.name
    pokeCardImg = document.createElement('img')
    pokeCardImg.setAttribute('src', obj.sprites.front_default)
    pokeCard.appendChild(pokeCardTitle)
    pokeCard.appendChild(pokeCardImg)
    pokeContainer.appendChild(pokeCard)

}
// pokeIndexInput()

var searchBtn = document.querySelector('#searchBtnId')
searchBtn.addEventListener('click', pokeIndexInput)