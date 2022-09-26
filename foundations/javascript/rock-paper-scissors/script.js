/* Computer generates a random choice */
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let pick = Math.floor(Math.random() * choices.length);
    return(pick, choices[pick]);
}
let computerSelection = getComputerChoice;
let humanScore = 0;
let computerScore = 0;

/* User insert a choice */
let playerSelection = "Rock";

function rock() {
    playerSelection = "Rock";
    console.log(yourScore(playerSelection, getComputerChoice()));
}
function paper() {
    playerSelection = "Paper";
    console.log(yourScore(playerSelection, getComputerChoice()));
}
function scissors() {
    playerSelection = "Scissors";
    console.log(yourScore(playerSelection, getComputerChoice()));
}


/* Algorithm decides who won */
function yourScore(playerSelection, computerSelection) {
    if(playerSelection==="Rock"){
        if(computerSelection==="Rock"){
            return "Tie";
        } else if(computerSelection==="Paper") {
            computerScore++;
            return "Lose";
        } else 
        humanScore++;
        return "Win";
    }
    if(playerSelection==="Paper") {
        if(computerSelection==="Rock"){
            humanScore++;
            return "Win";
        } else if(computerSelection==="Paper") {
            return "Tie";
        } else 
        computerScore++;
        return "Lose";
    }
    if(playerSelection==="Scissors") {
        if(computerSelection==="Rock"){
            computerScore++;
            return "Lose";
        } else if(computerSelection==="Paper") {
            humanScore++;
            return "Win";
        } else return "Tie";
    }
}
/* UI tells you what happenened */


/*Counter goes up till 5, then get reset*/
/*at 5, tells you it won*/

