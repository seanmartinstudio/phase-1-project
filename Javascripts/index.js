//Global Variables
const endPoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

//User enters word in form, word is grabbed and passed into Get request...
document.addEventListener('DOMContentLoaded', () => {
let userWordInput = document.querySelector('.form')
userWordInput.addEventListener('submit', (event) => {
    event.preventDefault() 
    const word = event.target.text.value
    fetchFromEndPoint(word)
})
})

//User's word input is passed into this function to grab the corresponding definition from the end point
function fetchFromEndPoint(word) {
    fetch(endPoint + word)
    .then(res => res.json())
    .then(data => renderDefinitionToDOM(data, word))
}

//Definition is rendered to the DOM
function renderDefinitionToDOM(data, word) {
const wordDefinition = word + ':' + ' ' + data[0].meanings[0].definitions[0].definition
let paragraph = document.createElement('p')
paragraph.id = word.id
paragraph.innerText = wordDefinition
document.getElementById('definition').appendChild(paragraph)

//Clear button refreshes 
let clearButton = document.getElementById('delete')
console.log(deleteButton)
clearButton.addEventListener(('click'), () => {
paragraph.remove()
})
}




