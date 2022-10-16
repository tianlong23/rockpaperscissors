/* create a playerselection function */
function playerselection() {
    /*console.log('player selection function');
    const choice = document.querySelector('.choices');
    choice.addEventListener('click', (e) => {
        if (e.target.id === 'rock' || e.target.id === 'paper' || e.target.id === 'scissors')
            userinput = (e.target.id);
            playround(); */

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            userinput = (e.target.id);
            playround();
        })
    })        
    };

function displayselection() {
    const selection = document.querySelector('.selection');
    //const content = document.createElement('div');
    selection.textContent = 'Computer Choice is: ' + computerinput + ' and user choice is: ' + userinput;
    //container.appendChild(content);
    const outcome = document.querySelector('.outcome');
    outcome.textContent = '';
}

function displayscore() {
    console.log('display function');
    const playerdisplay = document.querySelector('#playerdisplay');
    playerdisplay.textContent = playerscore;
    const computerdisplay = document.querySelector('#computerdisplay');
    computerdisplay.textContent = computerscore;
}

function computerselection () {
    console.log("computer selection function")

    
    computernumber = Math.random();
    /* if the number is <= .33 set the computer input variable to 'rock' */
    if (computernumber <= .33) {
        computerinput = "rock";
        displayselection();
    /* if the number is >= .33 & <=.66 set the computer input variable to 'paper' */
        } else if(computernumber >.33 && computernumber <=.66) {
         {
            computerinput = "paper";
            displayselection();
        }
    /* if the number is >.66 set the computer input variable to 'scissors' */
        } else {
            computerinput = "scissors";
            displayselection();
    }
}

const choices = Array.from(document.querySelectorAll('button')); 

//var playerscore = 0;
//var computerscore = 0;

game();
function game() {
   
   
    document.querySelector('#rock').disabled = false;
    document.querySelector('#paper').disabled = false;
    document.querySelector('#scissors').disabled = false;
    playerscore = 0;
    computerscore = 0;
   
   
   //FOR EACH LOOP RUNNING THROUH TWICE AFTER REPLAY. 
   //SOMETHIGN MAYBE RELATED TO THE ARRAY BEING DOUBLED AFTER THE FIRST PLAYTHROUGH. 
   //create a code pen and ask for help on discord, explain the problem
   



   choices.forEach((choice) => {
       
        choice.addEventListener('click', () => {
            var iterator = choices.values();
            for (let elements of iterator) {
                console.log(elements);   
            }
            console.log(choice.id + ' click');
            userinput = choice.id; 
            
            computerselection();
            playround();
            displayscore()
            document.getElementById("final").classList.remove("finalstyle");
            const finalscore = document.querySelector('.finalscore');
            finalscore.textContent = '';
            choices.forEach((choice) => {
                choice.removeEventListener('click', () => {
                    console.log('removed clicks');
                });
            });
            if (playerscore === 5) {
                document.querySelector('#rock').disabled = true;
                //how to get the hover to turn off once the buttons are disabled?
                document.querySelector('#paper').disabled = true;
                document.querySelector('#scissors').disabled = true;
                document.getElementById("final").classList.add("finalstyle")
                const finalscore = document.querySelector('.finalscore');
                finalscore.textContent = 'Player Wins';
                playerscore = 0;
                computerscore = 0;
                displayscore();
                document.getElementById('restartButton').innerHTML = '<button id = "restartButton" >Replay?</button>';
                const restartButton = document.getElementById('restartButton');
                restartButton.addEventListener('click', (e) => {
                    document.getElementById('restartButton').innerHTML = '';
                    document.getElementById("final").classList.remove("finalstyle");
                    const finalscore = document.querySelector('.finalscore');
                    finalscore.textContent = '';
                    console.log('REPLAY');
                    game();
                });
            } else if (computerscore === 5){
                document.querySelector('#rock').disabled = true;
                document.querySelector('#paper').disabled = true;
                document.querySelector('#scissors').disabled = true;
                document.getElementById("final").classList.add("finalstyle")
                const finalscore = document.querySelector('.finalscore');
                finalscore.textContent = 'Computer Wins';
                playerscore = 0;
                computerscore = 0;
                displayscore();
                document.getElementById('restartButton').innerHTML = '<button id = "restartButton" >Replay?</button>';
                const restartButton = document.getElementById('restartButton');
                restartButton.addEventListener('click', (e) => {
                    document.getElementById('restartButton').innerHTML = '';
                    document.getElementById("final").classList.remove("finalstyle");
                    const finalscore = document.querySelector('.finalscore');
                    finalscore.textContent = '';
                    console.log('REPLAY');
                    game();
                });
            } 
        })
        
    })
}

            function playround() {
                console.log("playround function");    
                
                switch (true) {
                        /* if player selection = 'rock' and computer selection = 'rock' return 'tie!' and replay the round */
                        case (userinput === "rock" && computerinput === "rock") :
                            outcome = document.querySelector('.outcome');
                            outcome.textContent = 'Outcome: Tie! Try Again';
                            break;
                        /* if player selection = 'rock' and computer selection = 'paper' return 'you lose! paper beats rock' and increase the computer score by 1 */
                            case (userinput === "rock" && computerinput === "paper"):
                            computerscore = computerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'You Lose! Paper beats rock!';
                            break;
                        /* if player selection = 'rock' and computer selection = 'scissors' return 'you win! rock beats scissors' and increase the player score by 1 */
                            case (userinput === "rock" && computerinput === "scissors"):
                            playerscore = playerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'Outcome: You win! rock beats scissors';
                            break;
                        /* if player selection = 'paper' and computer selection = 'rock' return 'you win! paper beats rock' and increase the player score by 1 */
                            case (userinput ==="paper" && computerinput === "rock"):
                            playerscore = playerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'Outcome: You win! paper beats rock';
                            break;
                        /* if player selection = 'paper' and computer selection = 'paper' return 'tie!' and and replay the round */
                            case (userinput ==="paper" && computerinput === "paper"):
                            outcome = document.querySelector('.outcome');
                            outcome.textContent = 'Outcome: Tie! Try Again';
                            break;
                        /* if player selection = 'paper' and computer selection = 'scissors' return 'you lose! scissors beats paper' and increase the computer score by 1 */
                            case (userinput ==="paper" && computerinput === "scissors"):
                            computerscore = computerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'Outcome: You Lose! Scissors beats paper!';
                            break;
                        /* if player selection = 'scissors' and computer selection = 'rock' return 'you lose! rock beats scissors' and increase the computer score by 1 */
                            case (userinput ==="scissors" && computerinput === "rock"):
                            computerscore = computerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'Outcome: You Lose! Rock beats Scissors';
                            break;
                        /* if player selection = 'scissors' and computer selection = 'paper' return 'you win! paper beats scissors' and increase the player score by 1 */
                            case (userinput ==="scissors" && computerinput === "paper"):
                            playerscore = playerscore + 1;
                            container = document.querySelector('.outcome');
                            container.textContent = 'Outcome: You win! Scissors beats paper';
                            break;
                        /* if player selection = 'scissors' and computer selection = 'scissors' return 'tie!' and replay the round */
                            case (userinput ==="scissors" && computerinput === "scissors"):
                            outcome = document.querySelector('.outcome');
                            outcome.textContent = 'Outcome: Tie! Try Again';
                            break;
                        default:
                }
            }