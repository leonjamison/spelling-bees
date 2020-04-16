// Buttons
const submitBttn = document.getElementById('login-submit')
const playBttn = document.getElementById('play-button')
const definitionBttn = document.getElementById('definition-button')
const pronunciationBttn = document.getElementById('pronunciation-button')
const sentenceBttn = document.getElementById('sentence-button')
const partOfSpeechBttn = document.getElementById('part-of-speech-button')
const originBttn = document.getElementById('origin-button')
const allButtons = document.querySelectorAll("#ui button yellow")
const finalAnswerBttn = document.getElementById("final-answer-button")

let wordInputField = document.getElementById('word-input-field')
let userWordInput = document.getElementById('word-input-field')
let gameDisplay = document.getElementById('game-container')
let userName = document.getElementById('login-field')
let counter = document.getElementById('game-clock').textContent
let clockDiv = document.getElementById("game-clock-div")
let score = document.getElementById("game-score")
let countdown

// console.log(counter)
const wordListUrl = "http://localhost:3000/words"

// console.log(fetchWordList())
document.addEventListener('DOMContentLoaded', function (){
    console.log("LETS SAVE THESE BEES!!")

    document.addEventListener('click', (e) => {
        e.preventDefault()
     // console.log(e.target)
        if (e.target === submitBttn){
            console.log("KILL THEM ALL!")
            let player = userName.value
            playBttn.disabled = false
        } else if (e.target === userName){
            console.log('Enter Username')     
        } else if (e.target === playBttn){
            newRound()
            console.log('LETS GET STARTED!')
        } else if (e.target === finalAnswerBttn) { 
            compareUserResponse(userWordInput)     
        }
    })
})

//renderWord is function to display specific word properties
function renderWord(word){
    // let div = document.createElement('div')
    gameDisplay.innerHTML = `
        <div class = "displayed-word" hidden>
            ${word.word}
        </div>
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
}

function getRandomWord() { 
    return fetch(wordListUrl) 
        .then(response => response.json())
        .then(words => {
            let randomWordObject = words[Math.floor(Math.random() * words.length)]  
            return randomWordObject
        }
    )   
} 

// EnableButtons activates buttons once a player clicks 'play'
function enableButtons(){
    // playBttn.textContent = "FINAL ANSWER"
    finalAnswerBttn.disabled = false
    // definitionBttn.disabled = false
    // pronunciationBttn.disabled = false
    // sentenceBttn.disabled = false
    // partOfSpeechBttn.disabled = false
    // originBttn.disabled = false 
}

function timer(){
    clearInterval(countdown)
    countdown = setInterval(function(){        
        counter--;
        (counter == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s"
        document.getElementById("game-clock").textContent = counter
        if (counter <= 0)
            console.log("Hi") 
            // alert("Game over")
        },1000)
}

function newRound() {
    playBttn.disabled = true
    wordInputField.value=""       

    timer()
    enableButtons()
    getRandomWord().then(randomWordObject => { 
        renderWord(randomWordObject)
        // compareUserResponse(randomWordObject.word)        
     })
} 

function compareUserResponse(word) { 
        let displayedWord = document.querySelector(".displayed-word") 
        console.log(word.value, "a", displayedWord.textContent.replace(/\s+/g,''))         
        if (word.value === displayedWord.textContent.replace(/\s+/g,'')) { 
            let parsedScore = parseInt(score.innerText) 
            parsedScore += 1
            score.innerText = parsedScore
            gameDisplay.innerHTML = ""
            return newRound()
        } else {
            // ("Unfortnately, your answer was incorrect.")
            console.log("Answer is incorrect!")
            gameDisplay.innerHTML = "" 
            return newRound()
        }
    }