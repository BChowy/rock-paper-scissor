let computerScore = 0;
let playerScore = 0;

const gameSect = document.querySelector('#game');
const options = document.querySelector('#playerChoice');
const CPUChoice = document.querySelector('#computerChoice')
const buttons = options.querySelectorAll('button');
const result = document.querySelector('#result');

const choices = document.querySelector('#choices');
const resetBtn = document.querySelector('#reset');

let player = document.querySelector('#playerScore');
let computer = document.querySelector('#computerScore');


// Add eventListener to each button, start a round till five wins, then call winner()
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerChoice = button.innerText;

        singleRound(getComputerChoice(), playerChoice);

        if (playerScore == 5 || computerScore == 5)
            winner();
    });
});

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    result.textContent = 'Choose a spell to cast';
    CPUChoice.textContent = 'opponent spell';

    choices.classList.toggle('hide-element');
    resetBtn.classList.toggle('hide-element');
});

// Return a random computer choice
function getComputerChoice() {
    const choiceList = ['STONE', 'FIREBALL', 'WIND'];
    let randomChoice = choiceList[Math.floor(Math.random() * choiceList.length)];

    return randomChoice;
}

// Show the result of one round, change the scores, and display the new score 
function singleRound(computerChoice, playerChoice) {
    CPUChoice.textContent = computerChoice;

    if (computerChoice === playerChoice) {
        result.textContent = `Two of ${computerChoice}'s it's a draw!`;
    }

    else if (computerChoice === 'STONE' && playerChoice === "WIND" || computerChoice === 'FIREBALL' && playerChoice === "STONE" || computerChoice === 'WIND' && playerChoice === "FIREBALL") {
        result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore += 1;
    }

    else if (playerChoice === 'STONE' && computerChoice === "WIND" || playerChoice === 'FIREBALL' && computerChoice === "STONE" || playerChoice === 'WIND' && computerChoice === "FIREBALL") {
        result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
        playerScore += 1;
    }

    player.textContent = playerScore;
    computer.textContent = computerScore;

}

// Declare the final winner, and reset scores
function winner() {
    choices.classList.toggle('hide-element');
    resetBtn.classList.toggle('hide-element');

    if (playerScore > computerScore) {
        result.textContent = 'YOU\'VE WON. Now what?'
        // console.log('YOU\'VE WIN!');
    }

    else {
        result.textContent = 'YOU\'VE LOST. Better find something else to do'
        // console.log('YOU\'VE LOST')
    }

}