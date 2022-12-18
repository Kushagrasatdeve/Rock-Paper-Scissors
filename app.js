const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let comoputerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
} ))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1//or you can use possibleChoices.length
    // console.log(randomNumber)

    if (randomNumber == 1){
        comoputerChoice = 'rock'
    }
    if (randomNumber == 2){
        comoputerChoice = 'scissors'
    }
    if (randomNumber == 3){
        comoputerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = comoputerChoice
}

function getResult() {
    if (comoputerChoice === userChoice){
        result = 'its a draw! '
    }
    if (comoputerChoice === 'rock' && userChoice=== "paper"){
        result = 'You win! '
    }
    if (comoputerChoice === 'rock' && userChoice=== "scissors"){
        result = 'You lost! '
    }
    if (comoputerChoice === 'paper' && userChoice=== "scissors"){
        result = 'You win! '
    }
    if (comoputerChoice === 'paper' && userChoice=== "rock"){
        result = 'You lose! '
    }
    if (comoputerChoice === 'scissors' && userChoice=== "rock"){
        result = 'You win! '
    }
    if (comoputerChoice === 'scissors' && userChoice=== "paper"){
        result = 'You lose! '
    }
    resultDisplay.innerHTML = result
}