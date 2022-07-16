var playerscore = 0;
var computerscore = 0;

game(playerscore, computerscore);

/* create a function called game that plays a 5 round game */
function game() {
   /* start a for loop starting at 1, increasing the count by 1 for each round, exiting once 5 rounds are played */
    
   
   for (let i = 1; i < 6; i++) {
    i + 1;
    playround();
    console.log("Round " + i + " | " + "Playerscore: " + playerscore + " | " + "Computerscore: "+ computerscore);
} 

if (playerscore > computerscore) {
    console.log("Final Playerscore: " + playerscore)
    console.log("final Computerscore" + computerscore)
    console.log("YOU WIN!!!")
} else {
    console.log("Final Playerscore: " + playerscore)
    console.log("final Computerscore: " + computerscore)
    console.log("YOU LOSE YOU SUCK!!!")
}
}
 

            function playround() {
                playerselection();
                computernumber = Math.random();
                    /* if the number is <= .33 set the computer input variable to 'rock' */
                    if (computernumber <= .33) {
                        computerinput = "rock";
                        console.log("computer choice is: " + computerinput);
                    /* if the number is >= .33 & <=.66 set the computer input variable to 'paper' */
                        } else if(computernumber >.33 && computernumber <=.66) {
                         {
                            computerinput = "paper";
                            console.log("computer choice is: " + computerinput);
                        }
                    /* if the number is >.66 set the computer input variable to 'scissors' */
                        } else {
                            computerinput = "scissors";
                            console.log("computer choice is: " + computerinput);
                    }
                    switch (true) {
                        /* if player selection = 'rock' and computer selection = 'rock' return 'tie!' and replay the round */
                        case (userinput === "rock" && computerinput === "rock") :
                            console.log("Tie! Try again")
                            playround();
                            break;
                        /* if player selection = 'rock' and computer selection = 'paper' return 'you lose! paper beats rock' and increase the computer score by 1 */
                            case (userinput === "rock" && computerinput === "paper"):
                            console.log("You Lose! Paper beats rock!");
                            computerscore = computerscore + 1;
                            break;
                        /* if player selection = 'rock' and computer selection = 'scissors' return 'you win! rock beats scissors' and increase the player score by 1 */
                            case (userinput === "rock" && computerinput === "scissors"):
                            console.log("You win! rock beats scissors");
                            playerscore = playerscore + 1;
                            break;
                        /* if player selection = 'paper' and computer selection = 'rock' return 'you win! paper beats rock' and increase the player score by 1 */
                            case (userinput ==="paper" && computerinput === "rock"):
                            console.log("You win! paper beats rock")
                            playerscore = playerscore + 1;
                            break;
                        /* if player selection = 'paper' and computer selection = 'paper' return 'tie!' and and replay the round */
                            case (userinput ==="paper" && computerinput === "paper"):
                            console.log("Tie! Try again");
                            playround();
                            break;
                        /* if player selection = 'paper' and computer selection = 'scissors' return 'you lose! scissors beats paper' and increase the computer score by 1 */
                            case (userinput ==="paper" && computerinput === "scissors"):
                            console.log("You Lose! Scissors beats paper");
                            computerscore = computerscore + 1;
                            break;
                        /* if player selection = 'scissors' and computer selection = 'rock' return 'you lose! rock beats scissors' and increase the computer score by 1 */
                            case (userinput ==="scissors" && computerinput === "rock"):
                            console.log("You Lose! Rock beats Scissors");
                            computerscore = computerscore + 1;
                            break;
                        /* if player selection = 'scissors' and computer selection = 'paper' return 'you win! paper beats scissors' and increase the player score by 1 */
                            case (userinput ==="scissors" && computerinput === "paper"):
                            console.log("You win! Scissors beats paper");
                            playerscore = playerscore + 1;
                            break;
                        /* if player selection = 'scissors' and computer selection = 'scissors' return 'tie!' and replay the round */
                            case (userinput ==="scissors" && computerinput === "scissors"):
                            console.log("Tie! Try again")
                            playround();
                            break;
                        default:
                }
            }

                /* create a playerselection function */
                function playerselection() {
                    /* create a variable for the users input *//* ask the user for an input */
                    userinput = prompt("what's your choice?", "rock, paper, scissors?")
                    /* change all inputs to all lowercase */
                    userinput = userinput.toLowerCase();
                    /* check to see if the input is one of the three accepted values */
                    /* if the input is an acceptable answer, set this as the variable for the player */
                    if (userinput === "rock" || userinput === "paper" || userinput === "scissors") {
                        console.log("PlayerChoice is: " + userinput );
                    /* if the input is not one of the acceptable answers, return an error message and ask for input again */
                    } else {
                        console.log("Incorrect option, choose rock, paper, or, scissors");
                        playerselection();
                    }
                    }