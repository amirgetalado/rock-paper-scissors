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
function playRound(playerSelection,computerSelection){
    //create conditions for winning/losing
    if ((playerSelection===`rock` && computerSelection===`scissors`) || 
    (playerSelection===`scissors` && computerSelection===`paper`) || 
    (playerSelection===`paper` && computerSelection===`rock`)){
        console.log(`You win! You chose "${playerSelection}" and the computer chose "${computerSelection}". ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`); //display player win
        return winner = `player`;
    }else if ((playerSelection===`rock` && computerSelection===`rock`) || 
    (playerSelection===`paper` && computerSelection===`paper`) || 
    (playerSelection===`scissors` && computerSelection===`scissors`) ){
        console.log(`It's a draw. You chose "${playerSelection}" and the computer chose "${computerSelection}"`);//display draw
        return winner = `draw`;
    }else{
        console.log(`You lose! The computer chose "${computerSelection}" and you chose "${playerSelection}". ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`);//display computer win
        return winner = `computer`;
    }
}



const computerSelection = getComputerChoice(); //store the computer choice to computerSelection

let playerSelection = prompt(`Please choose between rock, paper, and scissors: `); //store player choice to playerSelection
    playerSelection = playerSelection.toLowerCase(); //make the choice of player lowercase


//for score storage
let playerScore; 
let computerScore;
let winner = '';

playRound(playerSelection,computerSelection);
// console.log(`The winner is ${winner}.`);