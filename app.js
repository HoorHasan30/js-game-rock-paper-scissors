// 1) Define any variables used to track the state of the game:
//    The players choice
//    The computers choice
//    The match result - win/lose/tie
//    A result message - display who won that round

// 2) Define the required constants:
//    There are only 3 choices a user can make ("rock", "paper", "scissors")
//    We'll need a reference to a DOM element to display messages

// 3) Handle a player clicking a button

// 4) Handle generating random selections for the computer player

// 5) Compare the player choice to the computer choice, and check for a winner

// 6) Render a win/lose/tie message to the player 
//    Include both player and computer selections in the message
//    Clearly indicate who won

/*-------------------------------- Constants --------------------------------*/
const choices = ['rock', 'paper','scisors']

/*-------------------------------- Variables --------------------------------*/
let myChoice
let computerChoice
let message //win || lose 

/*------------------------ Cached Element References ------------------------*/
const resultDisplayElement = document.querySelector('#result-display')
const rockElement = document.querySelector('#rock')
const paperElement = document.querySelector('#paper')
const scisorsElement = document.querySelector('#scisors')

const playerChoiceElement = document.querySelector('#player-choice')
const computerChoiceElement = document.querySelector('#computer-choice')

console.log(resultDisplayElement)
console.log(rockElement)
console.log(paperElement)
console.log(scisorsElement)
console.log(playerChoiceElement)
console.log(computerChoiceElement)

/*-------------------------------- Functions --------------------------------*/

function play(eevnt){

    console.log("======================")

    // 1- Identify what the plyer picked
    myChoice = event.target.id
    console.log("My Choice is: " + myChoice)
    playerChoiceElement.textContent = "Player Choice is: " + myChoice


    // 2- Randomly pick computer choice
    computerChoice = choices[Math.floor(Math.random()*3)] //ranom 0 -> 0.9
    console.log("Computer Choice is: " + computerChoice)
    computerChoiceElement.textContent = "Computer Choice is: " + computerChoice


    // 3- Compare both choices
    if (myChoice === computerChoice){ 
        console.log("Tie Game")
    }
    else if (myChoice == "rock" && computerChoice == "scisors"){
        console.log("You Win")
    }
    else if (myChoice == "scisors" && computerChoice == "paper"){
        console.log("You Win")
    }
    else if (myChoice == "paper" && computerChoice == "rock"){
        console.log("You Win")
    }
    else { 
        console.log("You Lose")
    }

    // 4- 
}
/*----------------------------- Event Listeners -----------------------------*/
rockElement.addEventListener('click', play)
paperElement.addEventListener('click', play)
scisorsElement.addEventListener('click', play)


