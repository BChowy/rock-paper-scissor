let computerScore = 0;
let playerScore = 0;
let numOfRounds = 0;

const rounds = document.querySelector('#round');
const gameSect = document.querySelector('#game');
const options = document.querySelector('#options');
const buttons = options.querySelectorAll('button');
const result = document.querySelector('#result');

const resetBtn = document.querySelector('reset');
resetBtn.style.display = 'none';

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
function getComputerChoice() {
    const choiceList = ['ROCK', 'PAPER', 'SCISSOR'];
    let randomChoice = choiceList[Math.floor(Math.random() * choiceList.length)];

    return randomChoice;
}

// Show the result of one round, change the scores, and display the new score 
function singleRound(computerChoice, playerChoice) {
    numOfRounds += 1;
    if (computerChoice === playerChoice) {
        result.textContent = 'It\'s a draw!';
        //console.log("It's a draw!");
    }

    else if (computerChoice === 'ROCK' && playerChoice === "SCISSOR" || computerChoice === 'PAPER' && playerChoice === "ROCK" || computerChoice === 'SCISSOR' && playerChoice === "PAPER") {
        //console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;

    }

    else if (playerChoice === 'ROCK' && computerChoice === "SCISSOR" || playerChoice === 'PAPER' && computerChoice === "ROCK" || playerChoice === 'SCISSOR' && computerChoice === "PAPER") {
        //console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;
    rounds.textContent = numOfRounds;

}

// Declare the final winner, and reset scores
function winner(){
if (playerScore > computerScore) {
    result.textContent = 'YOU\'VE WON'
    // console.log('YOU\'VE WIN!');
}

else {
    result.textContent = 'YOU\'VE LOST'
    // console.log('YOU\'VE LOST')
}

playerScore = 0;
computerScore = 0;
numOfRounds = 0;
}

function reset(){

}