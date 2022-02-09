

//Fetch from API

//Endpoint test
let endPointWord = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello'

function fetchFromEndPoint() {
    fetch(endPointWord)
    .then(res => res.json())
    .then(data => {
      data.forEach(console.log(data))
    })
}
fetchFromEndPoint()