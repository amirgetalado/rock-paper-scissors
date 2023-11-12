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
function playRound(playerSelection){

    let computerSelection = getComputerChoice(); //store the computer choice to computerSelection

     //create conditions for winning/losing
    if ((playerSelection===`rock` && computerSelection===`scissors`) || 
            (playerSelection===`scissors` && computerSelection===`paper`) || 
            (playerSelection===`paper` && computerSelection===`rock`)) {
            //display player win then increment score 
            ++playerScore;
            pScore.innerText = `Score: ${playerScore}`;
            if(playerScore===5){
                finalResult();
            }else{
                result.innerText = `You win! You chose "${playerSelection}" and the computer chose "${computerSelection}". ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
            }
            

    }else if ((playerSelection===`rock` && computerSelection===`rock`) || 
        (playerSelection===`paper` && computerSelection===`paper`) || 
        (playerSelection===`scissors` && computerSelection===`scissors`) ) {
            //display draw
            result.innerText = `It's a draw. You chose "${playerSelection}" and the computer chose "${computerSelection}"`;
    }else{
            //display computer win then increment score
            ++computerScore;
            cScore.innerText = `Score: ${computerScore}`;

            if(computerScore===5){
                finalResult();
            }else{
                result.innerText = `You lose! The computer chose "${computerSelection}" and you chose "${playerSelection}". ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
            }
    }       
   
}

//make buttons unclickable then show final result, show playbutton again;
let finalResult = function(){
        
        btnUnclickable();
        //the player is unable to choose from rps buttons again as the game is already done
        //display result
        playBtn.style.display = 'inline-block';
        if(playerScore>computerScore){
            result.innerText = 'Congratulations. You are the winner.';
            
        }else{
            result.innerText = 'You lose. The computer wins.';
           
        }
         
};

//gets players' choice depends on click
// let playerChoice = function (){
//     let rockBtn = document.querySelector(".player-rock");
//     let paperBtn = document.querySelector(".player-paper");
//     let scissorsBtn = document.querySelector(".player-scissors");

//     rockBtn.addEventListener('click', function(){
//          const selection = `rock`;
//          playRound(selection); 
        
//     });

//     paperBtn.addEventListener('click', function(){
//         const selection = `paper`;
//         playRound(selection);
//     });

//     scissorsBtn.addEventListener('click', function(){
//         const selection = `scissors`;
//         playRound(selection);
//     });
// }; // When used, the first round is okay, but when the game ends, the counter
      // gets bugged since every time when the play now is clicked, additional
      // event listeners get added to the  buttons that is why the buttons
      // sometimes increment twice, thrice, etc. It gets bugged 2nd round onwards
      // because multiple eventlisteners get triggered.

//gets players' choice depends on click
let rockBtn = document.querySelector(".player-rock");
let paperBtn = document.querySelector(".player-paper");
let scissorsBtn = document.querySelector(".player-scissors");

rockBtn.addEventListener('click', function(){
     const selection = `rock`;
     playRound(selection); 
    
});

paperBtn.addEventListener('click', function(){
    const selection = `paper`;
    playRound(selection);
});

scissorsBtn.addEventListener('click', function(){
    const selection = `scissors`;
    playRound(selection);
});



let btnUnclickable = function(){
    buttons.forEach(function(button){
        button.disabled = true;
        button.style.opacity = '1';
    });
}


// //for score storage
let playerScore=0; 
let computerScore=0;
let playBtn = document.querySelector('.play-now');
let result = document.querySelector('.result');
let pScore = document.querySelector('.player-score');
let cScore = document.querySelector('.computer-score');
let buttons = document.querySelectorAll('.icon-cards');

//buttons unclicklable unless player clicks play now button
btnUnclickable();

//game initiator. once clicked, player can already click a button
playBtn.addEventListener('click', function(){
     //the player can now choose between rps buttons, then the game starts
    buttons.forEach(function(button){
        button.disabled = false;
    }); 
    playerScore = 0;
    computerScore = 0;
    pScore.innerText = 'Score: 0';
    cScore.innerText = 'Score: 0';
    result.innerText = '';
    playBtn.style.display = 'none'; //hides the playNow button after clicked
 
});


// //Flow:
// //  buttons unclickable > playbutton clicked > playbutton display:none > buttons clickable > 
// // playerChoice() > playRound(playerSelection) > finalResult() > buttons unclickable > 
// // display result > reset score > playbutton display:inline-block  


