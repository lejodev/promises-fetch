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

function pokeIndexInput() {
    var poke_container = document.querySelector('.poke-container')
    var inputOneValue = document.querySelector('#indexOne').value
    var inputTwoValue = document.querySelector('#indexTwo').value
    var inputThreeValue = document.querySelector('#indexThree').value
    
    if(inputOneValue && inputTwoValue && inputThreeValue) {
        // var searchPromise = new Promise((resolve, reject) => {
            var promises = []
            fetch(link + inputOneValue)
                .then(pokeRaw => pokeRaw.json())
                .then(poke => promises.push(poke/*pokeRaw.json()*/));
                // .then()
                // .then(poke => console.log(poke)));
            console.log(promises);
        // })
    } else {
        alert('all required')
    }
}
// pokeIndexInput()

var searchBtn = document.querySelector('#searchBtnId')
searchBtn.addEventListener('click', pokeIndexInput)