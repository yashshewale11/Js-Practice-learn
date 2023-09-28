 let randomNumber=parseInt(Math.random()*100+1); 

 const submit=document.querySelector('#subt')
 const userInput=document.querySelector('#guessField')
 const guessSlot=document.querySelector('.guesses')
 const remaining=document.querySelector('.lastResult')
 const lowOrHi=document.querySelector('.lowOrHi')
 const startOver=document.querySelector('.resultParas')

 const p= document.createElement('p')

 let prevGuess=[]
 let numGusses=1

 let playGame= true;
if (playGame) {
    submit.addEventListener('click',function(endGame){
        endGame.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)


    })
    
}

 function validateGuess(guess){
    if (isNaN(guess)) {
        alert('Please enter a Valid Number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('please enter a number less then 100')
    }else{
        prevGuess.push(guess)
        if (numGusses===11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
 }

 function checkGuess(guess){
     if (guess==randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
     }else if (guess<randomNumber) {
        displayMessage(`Number is TOOO low`)
     }else if (guess>randomNumber) {
        displayMessage(`Number is TOOO High`)
     }
 }
 function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+= `${guess},  `;
    numGusses++;
    remaining.innerHTML=`${11-numGusses}`
 }

 function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
 }
 function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
 }

 function newGame()
{
   const newGameButton=document.querySelector('#newGame')
   newGameButton.addEventListener('click',function(endGame){
   randomNumber=parseInt(Math.random()*100+1); 
   prevGuess=[]
   numGusses=1
   guessSlot.innerHTML=''
   remaining.innerHTML=`${11-numGusses}  `;
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
    playGame=true 
   })
}
