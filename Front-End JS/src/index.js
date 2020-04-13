const submitBttn = document.getElementById('login-submit')
const userName = document.getElementById('login-field')
const playBttn = document.getElementById('play-button')
// console.log(submitBttn)

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
     
     }else {
         console.log('ERRRORRRR!!!')
     }
    }

    
    )


   

})

