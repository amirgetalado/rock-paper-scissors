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

const computerSelection = getComputerChoice();

function playerSelection(){

    let playerChoice = prompt(`Please choose between Rock,Paper, or Scissors; ` , ''); // gets input from player

    if(playerChoice===' ' || playerChoice===null ){
        alert(`Please enter a valid choice!`); //if player enters nothing this will show
    }else{
        playerChoice = playerChoice.toLowerCase(); //if player enters a valid response it converts the response to lowercase
    }
       
    return playerChoice;
}




