//Global Variable
const endPoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

//User form input
document.addEventListener('DOMContentLoaded', () => {
let userWordInput = document.querySelector('.form')
userWordInput.addEventListener('submit', (event) => {
    event.preventDefault() 
    const word = event.target.text.value
    fetchFromEndPoint(word)
    userWordInput.reset()
})
})

//GET request for data
function fetchFromEndPoint(word) {
    fetch(endPoint + word)
    .then(res => res.json())
    .then(data => renderDefinitionToDOM(data, word))
}

//Definition rendered to DOM
function renderDefinitionToDOM(data, word) {
const wordDefinition = word + ':' + ' ' + data[0].meanings[0].definitions[0].definition
let paragraph = document.createElement('p')
paragraph.id = word
paragraph.textContent = wordDefinition
document.getElementById('definition').appendChild(paragraph)

//Clear button (created in HTML)
let clearButton = document.getElementById('clear')
clearButton.addEventListener(('click'), () => paragraph.remove())

//Delete button (created dynamically)
let deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete'
deleteButton.id = 'delete'
paragraph.appendChild(deleteButton)
deleteButton.addEventListener(('click'), () => document.getElementById(word).remove())

//Like button (created dynamically)
let likeButton = document.createElement('button')
likeButton.className = 'button'
likeButton.id = (word)
likeButton.textContent = 'Like'
paragraph.appendChild(likeButton)
likeButton.addEventListener(('click'), () => {
    if(likeButton.textContent === 'Like') {
        likeButton.textContent = 'Like ❤️'
    } else if (likeButton.textContent === 'Like ❤️') {
        likeButton.textContent= 'Like'
    }
})
}

