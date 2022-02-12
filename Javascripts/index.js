//Global Variable
const endPoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

//User enters word in form
document.addEventListener('DOMContentLoaded', () => {
let userWordInput = document.querySelector('.form')
userWordInput.addEventListener('submit', (event) => {
    event.preventDefault() 
    const word = event.target.text.value
    fetchFromEndPoint(word)
})
})

//Get request for data
function fetchFromEndPoint(word) {
    fetch(endPoint + word)
    .then(res => res.json())
    .then(data => renderDefinitionToDOM(data, word))
}

//Definition is rendered to the DOM
function renderDefinitionToDOM(data, word) {
const wordDefinition = word + ':' + ' ' + data[0].meanings[0].definitions[0].definition
let paragraph = document.createElement('p')
paragraph.id = word
paragraph.textContent = wordDefinition
document.getElementById('definition').appendChild(paragraph)

//Clear button 
let clearButton = document.getElementById('clear')
clearButton.addEventListener(('click'), () => {
paragraph.remove()
})

//Delete button
let deleteButton = document.createElement('button')
deleteButton.innerText = 'Delete'
deleteButton.id = 'delete'
paragraph.appendChild(deleteButton)
deleteButton.addEventListener(('click'), () => {
document.getElementById(word).remove()
})

//Like button
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

