let playerScore = 0;
let computerScore = 0;

function computerSelection () {
    let computerNumber = Math.random();
    if (computerNumber <= .33) {
        computerInput = 'rock'
        displaySelection ();
    } else if (computerNumber >.33 && computerNumber <=.66) {
        computerInput = 'paper';
        displaySelection ();
    } else {
        computerInput = 'scissors';
        displaySelection ();
    }
}

function displaySelection () {
    const playerSelection = document.querySelector('.playerSelection');
    playerSelection.textContent = 'Player: ' + playerInput;
    const computerSelection = document.querySelector('.computerSelection');
    computerSelection.textContent = 'Computer: ' + computerInput;
    //const selection = document.querySelector('.selection');
    //selection.textContent = 'Computer choice is: ' + computerInput + ' & Player Choice is: ' + playerInput;
    const outcome = document.querySelector ('.outcome');
}

function displayScore () {
    const playerDisplay = document.querySelector('#playerDisplay');
    playerDisplay.textContent = playerScore;
    const computerDisplay = document.querySelector('#computerDisplay');
    computerDisplay.textContent = computerScore;
}

function playRound () {
    switch (true) {
        /* if player selection = 'rock' and computer selection = 'rock' return 'tie!' and replay the round */
        case (playerInput === "rock" && computerInput === "rock") :
            outcome = document.querySelector('.outcome');
            outcome.textContent = 'Outcome: Tie! Try Again';
            break;
        /* if player selection = 'rock' and computer selection = 'paper' return 'you lose! paper beats rock' and increase the computer score by 1 */
            case (playerInput === "rock" && computerInput === "paper"):
            computerScore = computerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'You Lose! Paper beats rock!';
            break;
        /* if player selection = 'rock' and computer selection = 'scissors' return 'you win! rock beats scissors' and increase the player score by 1 */
            case (playerInput === "rock" && computerInput === "scissors"):
            playerScore = playerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'Outcome: You win! rock beats scissors';
            break;
        /* if player selection = 'paper' and computer selection = 'rock' return 'you win! paper beats rock' and increase the player score by 1 */
            case (playerInput ==="paper" && computerInput === "rock"):
            playerScore = playerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'Outcome: You win! paper beats rock';
            break;
        /* if player selection = 'paper' and computer selection = 'paper' return 'tie!' and and replay the round */
            case (playerInput ==="paper" && computerInput === "paper"):
            outcome = document.querySelector('.outcome');
            outcome.textContent = 'Outcome: Tie! Try Again';
            break;
        /* if player selection = 'paper' and computer selection = 'scissors' return 'you lose! scissors beats paper' and increase the computer score by 1 */
            case (playerInput ==="paper" && computerInput === "scissors"):
            computerScore = computerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'Outcome: You Lose! Scissors beats paper!';
            break;
        /* if player selection = 'scissors' and computer selection = 'rock' return 'you lose! rock beats scissors' and increase the computer score by 1 */
            case (playerInput ==="scissors" && computerInput === "rock"):
            computerScore = computerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'Outcome: You Lose! Rock beats Scissors';
            break;
        /* if player selection = 'scissors' and computer selection = 'paper' return 'you win! paper beats scissors' and increase the player score by 1 */
            case (playerInput ==="scissors" && computerInput === "paper"):
            playerScore = playerScore + 1;
            container = document.querySelector('.outcome');
            container.textContent = 'Outcome: You win! Scissors beats paper';
            break;
        /* if player selection = 'scissors' and computer selection = 'scissors' return 'tie!' and replay the round */
            case (playerInput ==="scissors" && computerInput === "scissors"):
            outcome = document.querySelector('.outcome');
            outcome.textContent = 'Outcome: Tie! Try Again';
            break;
        default:
    }
}

function gameTwo () {
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    const choices = Array.from(document.querySelectorAll('button')); 
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            playerInput = choice.id;
            console.log (choice.id);
            console.log ('here');
            computerSelection();
            playRound();
            displayScore()
            document.getElementById("final").classList.remove("finalstyle");
            const finalscore = document.querySelector('.finalscore');
            finalscore.textContent = '';
            if (playerScore === 5) {
                document.querySelector('#rock').disabled = true;
                document.querySelector('#paper').disabled = true;
                document.querySelector('#scissors').disabled = true;
                document.getElementById("final").classList.add("finalstyle");
                const finalscore = document.querySelector('.finalscore');
                finalscore.textContent = 'Player Wins';
                displayScore();
                document.getElementById('restartButton').innerHTML = '<button>Replay?</button>';
                const restartButton = document.getElementById('restartButton');
                restartButton.addEventListener('click', () => {
                    document.getElementById('restartButton').innerHTML = '';
                    document.getElementById("final").classList.remove("finalstyle");
                    const finalscore = document.querySelector('.finalscore');
                    finalscore.textContent = '';
                    playerScore = 0;
                    computerScore = 0;
                    displayScore();
                    document.querySelector('#rock').disabled = false;
                    document.querySelector('#paper').disabled = false;
                    document.querySelector('#scissors').disabled = false;
                });
            } else if (computerScore === 5){
                document.querySelector('#rock').disabled = true;
                document.querySelector('#paper').disabled = true;
                document.querySelector('#scissors').disabled = true;
                document.getElementById("final").classList.add("finalstyle");
                const finalscore = document.querySelector('.finalscore');
                finalscore.textContent = 'Computer Wins';
                displayScore();
                document.getElementById('restartButton').innerHTML = '<button>Replay?</button>';
                const restartButton = document.getElementById('restartButton');
                restartButton.addEventListener('click', (e) => {
                    document.getElementById('restartButton').innerHTML = '';
                    document.getElementById("final").classList.remove("finalstyle");
                    const finalscore = document.querySelector('.finalscore');
                    finalscore.textContent = '';
                    playerScore = 0;
                    computerScore = 0;
                    displayScore();
                    document.querySelector('#rock').disabled = false;
                    document.querySelector('#paper').disabled = false;
                    document.querySelector('#scissors').disabled = false;
                });
            }
        });
    });
}

gameTwo ();

