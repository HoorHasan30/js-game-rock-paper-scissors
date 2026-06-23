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
const choices = ['rock', 'paper', 'scisors']

/*-------------------------------- Variables --------------------------------*/
let myChoice
let computerChoice
let message //win || lose 

/*------------------------ Cached Element References ------------------------*/
const resultDisplayElement = document.querySelector('#result-display')
const playerChoiceElement = document.querySelector('#player-choice')
const computerChoiceElement = document.querySelector('#computer-choice')

const rockElement = document.querySelector('#rock')
const paperElement = document.querySelector('#paper')
const scisorsElement = document.querySelector('#scisors')

const resetElement = document.querySelector("#reset")

console.log(resultDisplayElement)
console.log(playerChoiceElement)
console.log(computerChoiceElement)

console.log(rockElement)
console.log(paperElement)
console.log(scisorsElement)

console.log(resetElement)


/*-------------------------------- Functions --------------------------------*/
function getPlayerChoice(event) {

    // 1- Identify what the plyer picked
    myChoice = event.target.id

    console.log("My Choice is: " + myChoice)
    playerChoiceElement.textContent = "Player Choice is: " + myChoice
    playerChoiceElement.style.color = "Grey"
    playerChoiceElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"
}

function getComputerChoice() {

    // 2- Randomly pick computer choice
    computerChoice = choices[Math.floor(Math.random() * 3)] //ranom 0 -> 0.9

    setTimeout(
        function () {
            console.log("Computer Choice is: " + computerChoice)
            computerChoiceElement.textContent = "Computer Choice is: " + computerChoice
            computerChoiceElement.style.color = "Grey"
            computerChoiceElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"
        }
        , 1000)
}

function compare() {
    // 3- Compare both choices
    if (myChoice === computerChoice) {
        setTimeout(
            function () {
                resultDisplayElement.textContent = ("Tie Game")
                resultDisplayElement.style.color = "Grey"
                resultDisplayElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"

                //disable btns
                disableBtns()

            }
            , 1100)
    }
    else if (myChoice == "rock" && computerChoice == "scisors") {
        setTimeout(
            function () {
                resultDisplayElement.textContent = ("You Win")
                resultDisplayElement.style.color = "Green"
                resultDisplayElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"

                //disable btns
                disableBtns()
            }
            , 1100)
    }
    else if (myChoice == "scisors" && computerChoice == "paper") {
        setTimeout(
            function () {
                resultDisplayElement.textContent = ("You Win")
                resultDisplayElement.style.color = "Green"
                resultDisplayElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"

                //disable btns
                disableBtns()
            }
            , 1100)
    }
    else if (myChoice == "paper" && computerChoice == "rock") {
        setTimeout(
            function () {
                resultDisplayElement.textContent = ("You Win")
                resultDisplayElement.style.color = "Green"
                resultDisplayElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"

                //disable btns
                disableBtns()
            }
            , 1100)
    }
    else {
        setTimeout(
            function () {
                resultDisplayElement.textContent = ("You Lose")
                resultDisplayElement.style.color = "Red"
                resultDisplayElement.style.backgroundColor = "rgba(215, 217, 218, 0.575)"
            
                //disable btns
                disableBtns()
            }
            , 1100)
    }
}

function play(event) {

    console.log("======================")

    getPlayerChoice(event)
    getComputerChoice()
    compare()
    resetGame()
}

// 4- reset Game
function disableBtns() {
    rockElement.disabled = true;
    scisorsElement.disabled = true;
    paperElement.disabled = true;
}

function resetGame() {
    rockElement.disabled = false;
    scisorsElement.disabled = false;
    paperElement.disabled = false;

    resultDisplayElement.textContent = null
    resultDisplayElement.style.backgroundColor = ""
    playerChoiceElement.textContent = null
    playerChoiceElement.style.backgroundColor = ""
    computerChoiceElement.textContent = null
    computerChoiceElement.style.backgroundColor = ""
}

/*----------------------------- Event Listeners -----------------------------*/
rockElement.addEventListener('click', play)
paperElement.addEventListener('click', play)
scisorsElement.addEventListener('click', play)

resetElement.addEventListener('click', resetGame)


