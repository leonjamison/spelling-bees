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
        //Start Timer
        // timer()
        //Enable Buttons
        // enableButtons()
        //Start Game
        newRound()
    
        
        
            // if(userWordInput === word.name){
            //     //render new word and incremement score by 1
            // }else{
            //     //say incorrect, try again
            // }
        //After word is displayed, grab text input from user, validate it; if correct..increase score by one and render new word; incorrect..say "incorrect, try again" and clear userinput field
        console.log('LETS GET STARTED!')
        }
    })
})

//A function that handles the fetching of the words, picking of a random word, rendering of the word, and the authentication of the word, along with point incrementation
// function newGame() {  
    
// }



// fetchWordList is function to fetch all words from backend
// function getRandomWord() { 
//         fetch(wordListUrl) 
//         .then(response => response.json())
//             // console.log(response)
//         .then(words => {
//             const randomWordObject = words[Math.floor(Math.random() * words.length)]  
//             // const randomWord = randomWordObject.word
//             return randomWordObject
//         }
//     )          
// } 

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

function getRandomWord() { 
    return fetch(wordListUrl) 
    .then(response => response.json())
        // console.log(response)
    .then(words => {
        let randomWordObject = words[Math.floor(Math.random() * words.length)]  
        // const randomWord = randomWordObject.word
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

// Timer for countdown
function timer(){
    // restart timer 
    clearInterval(countdown)
    countdown = setInterval(function(){
        counter--;
        (counter == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s"
        document.getElementById("game-clock").textContent = counter
        if (counter <= 0) 
            clearInterval(countdown)
            //end of round message
            //newRound()
        },1000)
}

function newRound() {
    playBttn.disabled = true
    wordInputField.value=""
    // reset timer

    timer()
    enableButtons()
    getRandomWord().then(randomWordObject => { 
        renderWord(randomWordObject)
        finalAnswerBttn.addEventListener("click", (e) => {   
            if (e.target === finalAnswerBttn) {
                if (userWordInput.value === randomWordObject.word) {                    
                    let parsedScore = parseInt(score.innerHTML)
                    console.log(score.innerHTML)
                    parsedScore += 1
                    score.innerHTML = parsedScore
                    gameDisplay.removeChild(gameDisplay.childNodes[0]) 
                    return newRound()
                } else {
                    // ("Unfortnately, your answer was incorrect.")
                    gameDisplay.removeChild(gameDisplay.childNodes[0]) 
                    return newRound()
                }}
            }
        )
    })
}   

