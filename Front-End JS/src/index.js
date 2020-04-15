// Buttons
const submitBttn = document.getElementById('login-submit')
const playBttn = document.getElementById('play-button')
const definitionBttn = document.getElementById('definition-button')
const pronunciationBttn = document.getElementById('pronunciation-button')
const sentenceBttn = document.getElementById('sentence-button')
const partOfSpeechBttn = document.getElementById('part-of-speech-button')
const originBttn = document.getElementById('origin-button')
const allButtons = document.querySelectorAll("#ui button yellow")

let userWordInput = document.getElementById('word-input-field').textContent
let gameDisplay = document.getElementById('game-container')
let userName = document.getElementById('login-field')
let counter = document.getElementById('game-clock').textContent
let clockDiv = document.getElementById("game-clock-div")
// console.log(counter)
const wordListUrl = "http://localhost:3000/words"

// console.log(fetchWordList())

document.addEventListener('DOMContentLoaded', function (){
    console.log("LETS KILL THESE BEES!!")

    document.addEventListener('click', (e) => {
        e.preventDefault()
     // console.log(e.target)
     if (e.target === submitBttn){
         console.log("KILL THEM ALL!")
         let player = userName.value
            playBttn.disabled = false

     }else if(e.target === userName){
            console.log('Enter Username')
     
     }else if(e.target === playBttn){
        //Start Timer
        timer()
        //Enable Buttons
        enableButtons()
        //Start Game
        fetchWordList()
        if(userWordInput === word.name){
            //render new word and incrememnt score by 1
        }else{
            //say incorrect, try again
        }
        //After word is displayed, grab text input from user, validate it; if correct..increase score by one and render new word; incorrect..say "incorrect, try again" and clear userinput field
        console.log('LETS GET STARTED!')
     }
    })

})

// fetchWordList is function to fetch all words from backend
function fetchWordList() { 
    fetch(wordListUrl) 
    .then(response => response.json())
        // console.log(response)
    .then(words => words.forEach(function(word){
    
        renderWord(word)
    }))
    // return fetchWordList()
    } 



//renderWord is function to display specific word properties
function renderWord(word){
    const div = document.createElement('div')
    div.innerHTML = `
    <div class = "definition">
        Definition: ${word.definition}
    </div>
    <div class = "pronunciation">
        ${word.pronunciation}
    </div>
    <div class = "sentence">
        Example: ${word.example_sentence}
    </div>
    <div class = "part-of-speech">
        ${word.part_of_speech}
    </div>
    <div class = 'origin'>
        Origin: ${word.language_of_origin}
    </div>
    `
    gameDisplay.append(div)  
}
// EnableButtons activates buttons once a player clicks 'play'
function enableButtons(){
    playBttn.textContent = "PAUSE"
    definitionBttn.disabled = false
    pronunciationBttn.disabled = false
    sentenceBttn.disabled = false
    partOfSpeechBttn.disabled = false
    originBttn.disabled = false 

}
// Timer for countdown
function timer(){
    let countdown = setInterval(function(){
        counter--;
        (counter == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s"
        document.getElementById("game-clock").textContent = counter
        if (counter <= 0) clearInterval(countdown)
        },1000)

}
