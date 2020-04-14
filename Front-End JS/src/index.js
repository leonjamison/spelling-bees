const submitBttn = document.getElementById('login-submit')
const userName = document.getElementById('login-field')
const playBttn = document.getElementById('play-button')
let counter = document.getElementById('game-clock').textContent
let clockDiv = document.getElementById("game-clock-div")
// console.log(counter)
const wordListUrl = "http://localhost:3000/words"


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
        
        let countdown = setInterval(function(){
        counter--;
        (counter == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s"
        document.getElementById("game-clock").textContent = counter
        if (counter <= 0) clearInterval(countdown)
        },1000);

        playBttn.textContent = "PAUSE"
        console.log('LETS GET STARTED!')
     }
    })

})

function fetchWordList() { 
    fetch(wordListUrl) 
        .then(response => response.json())
        .then(words => console.log(words))
    }

fetchWordList()

