const submitBttn = document.getElementById('login-submit')
const userName = document.getElementById('login-field')
const playBttn = document.getElementById('play-button')
let counter = document.getElementById('game-clock').textContent
let clockDiv = document.getElementById("game-clock-div")
// console.log(counter)
// console.log(submitBttn)
const wordListUrl = "http://localhost:3000/words"

document.addEventListener('DOMContentLoaded', function (){
    console.log("LETS SAVE THESE BEES!!")

    document.addEventListener('click', (e) => {
        e.preventDefault()
     // console.log(e.target)
            if (e.target === submitBttn){
                console.log("KILL THEM ALL!")
                let player = userName.value
                    playBttn.disabled = false

            }else if (e.target === userName){
                    console.log('Enter Username')
            
            }else {
                console.log('ERRRORRRR!!!')
            }
        }    
    )   
})

function fetchWordList() { 
    fetch(wordListUrl) 
        .then(response => response.json())
        .then(words => console.log(words))
    }

fetchWordList()

