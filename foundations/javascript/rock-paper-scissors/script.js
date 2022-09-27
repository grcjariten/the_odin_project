let humanScore = 0;
let computerScore = 0;
humanScore = document.getElementById("humanS");
computerScore = document.getElementById("computerS");




/* Computer generates a random choice */
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    let pick = Math.floor(Math.random() * choices.length);
    return(pick, choices[pick]);
}
let computerSelection = getComputerChoice;

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
    let score = "Tie";
    if(playerSelection==="Rock"){
        if(computerSelection==="Rock"){
            score = "Tie";
        } else if(computerSelection==="Paper") {
            computerScore++;
            score = "Lose";
            document.getElementById("computerS").innerHTML = computerScore;
        } else if(computerSelection==="Scissors"){
        humanScore++;
        score = "Win";
        document.getElementById("humanS").innerHTML = humanScore;
        }
      
    }
    if(playerSelection==="Paper") {
        if(computerSelection==="Rock"){
            humanScore++;
            score = "Win";
            document.getElementById("humanS").innerHTML = humanScore;
        } else if(computerSelection==="Paper") {
            score = "Tie";
        } else if(computerSelection=="Scissors"){
        computerScore++;
        score = "Lose";}
        document.getElementById("computerS").innerHTML = computerScore;
    }
    if(playerSelection==="Scissors") {
        if(computerSelection==="Rock"){
            computerScore++;
            score = "Lose";
            document.getElementById("computerS").innerHTML = computerScore;
        } else if(computerSelection==="Paper") {
            humanScore++;
            score = "Win";
            document.getElementById("humanS").innerHTML = humanScore;
        } else if (computerSelection === "Scissors")
        score = "Tie";
    }
   
    /* console.log("humanscore is: ${humansScore}");
    document.getElementById("humanScore").innerHTML = humanScore;
    document.getElementById("computerScore").innerHTML = computerScore; */
    console.log(humanScore);
    return score;
}

/* UI tells you what happenened */


/*Counter goes up till 5, then get reset*/
/*at 5, tells you it won*/

