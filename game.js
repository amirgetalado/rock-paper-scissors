//Create a function for computer choice
function getComputerChoice(){

    let randomNumber = Math.floor(Math.random()*3)+1; //Math.random() here generates a random decimal number from 0 to 2, we added *3 to increase it to 3. We then added it as a parameter to Math.floor since Math.floor rounds up decimal numbers to whole numbers, then adds 1 so that if it returns 0, it will instead be 1, so there will only be 3 choices instead of 4.

    if (randomNumber === 1){
        return `Rock`;
    }else if (randomNumber === 2){
        return `Paper`;
    }else{
        return `Scissors`;
    }
}



console.log(getComputerChoice());