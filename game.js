//Create a function for computer choice
function getComputerChoice(){

    let randomNumber = Math.floor(Math.random()*3)+1; //Math.random() here generates a random decimal number from 0 to 2, we added *3 to increase it to 3. We then added it as a parameter to Math.floor since Math.floor rounds up decimal numbers to whole numbers, then adds 1 so that if it returns 0, it will instead be 1, so there will only be 3 choices instead of 4.

    switch(randomNumber){
        case 1:
            return `rock`;
            break;
        case 2:
            return `paper`;
            break;
        default:
            return `scissors`;            
    }
}

//Create a function for 1 round of the game
function playRound(){

    let playerSelection = prompt(`Please choose between rock, paper, and scissors: `); //store player choice to playerSelection
        playerSelection = playerSelection.toLowerCase(); //make the choice of player lowercase

    let computerSelection = getComputerChoice(); //store the computer choice to computerSelection

    //create conditions for winning/losing
    if ((playerSelection===`rock` && computerSelection===`scissors`) || 
    (playerSelection===`scissors` && computerSelection===`paper`) || 
    (playerSelection===`paper` && computerSelection===`rock`)){
        console.log(`You win! You chose "${playerSelection}" and the computer chose "${computerSelection}". ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`); //display player win
        return ++playerScore; //increment playerscore
    }else if ((playerSelection===`rock` && computerSelection===`rock`) || 
    (playerSelection===`paper` && computerSelection===`paper`) || 
    (playerSelection===`scissors` && computerSelection===`scissors`) ){
        console.log(`It's a draw. You chose "${playerSelection}" and the computer chose "${computerSelection}"`);//display draw
        return;
    }else{
        console.log(`You lose! The computer chose "${computerSelection}" and you chose "${playerSelection}". ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`);//display computer win
        return ++computerScore;
    }
}

//Create a function that plays the game 5 times
 function game(){

    //I use while loop because I set the max score to 5. First one reaches 5 will win
    // while(playerScore<5 && computerScore <5){
    //     playRound();
    //     console.log(`Player Score: ${playerScore}`);
    //     console.log(`Computer Score: ${computerScore}`);
    // }

    //The Odin Project's instruction is to play 5 rounds, this for loop is for looping until 5 rounds
    for (let i =0; i<5; i++){
        playRound();
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore){
        console.log(`------------------------------`);
        console.log(`Congratulations. You are the winner.`);   
        console.log(`Final score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
    }else if(computerScore > playerScore) {
        console.log(`------------------------------`);
        console.log(`You lose. The computer wins.`);     
        console.log(`Final score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
    }else{
        console.log(`------------------------------`);
        console.log(`It's a tie.`);     
        console.log(`Final score is: \nPlayer: ${playerScore} \nComputer: ${computerScore}`);
    }  
 }




//for score storage
let playerScore=0; 
let computerScore=0;

game();
