let computerScore = 0;
let playerScore = 0;
let numOfRounds = 0;

const rounds = document.querySelector('#round');
const gameSect = document.querySelector('#game');
const options = document.querySelector('#options');
const buttons = options.querySelectorAll('button');
const result = document.querySelector('#result');

let player = document.querySelector('#playerScore');
let computer = document.querySelector('#computerScore');


// Add eventListener to each button, start a round till five wins, then call winner()
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.innerText;

        singleRound(getComputerChoice(), playerChoice);

        if(playerScore == 5 || computerScore == 5)
        winner();
    });
});

// Return a random computer choice

const rounds = document.querySelector('#round');
const gameSect = document.querySelector('#game');
const options = document.querySelector('#options');
const buttons = options.querySelectorAll('button');
const result = document.querySelector('#result');

let player = document.querySelector('#playerScore');
let computer = document.querySelector('#computerScore');


function getComputerChoice() {
    let choiceList = ['rock', 'paper', 'scissor'];
    let randomChoice = choiceList[Math.floor(Math.random() * choiceList.length)];

    return randomChoice;
}

function playerChoice() {
    let input = prompt("What's your choice?");
    let choice = input.toLowerCase();

    return choice;
}

function singleRound(computerChoice, playerChoice) {

    if (computerChoice === playerChoice) {
        console.log("It's a draw!");
    }

    else if (computerChoice === 'rock' && playerChoice === "scissor" || computerChoice === 'paper' && playerChoice === "rock" || computerChoice === 'scissor' && playerChoice === "paper") {
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore += 1;

    }

    else if (playerChoice === 'rock' && computerChoice === "scissor" || playerChoice === 'paper' && computerChoice === "rock" || playerChoice === 'scissor' && computerChoice === "paper") {
        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        playerScore += 1;
    }

}

function game() {

    while (computerScore != 5 && playerScore != 5) {
        let choice = playerChoice();
        singleRound(getComputerChoice(), choice);
    }

    console.log('GAME IS OVER!')
    if (playerScore > computerScore) {
        console.log('YOU\'VE WIN!');
    }

    else {
        console.log('YOU\'VE LOST')
    }
}

game();