

//declare global variables to keep stack of score

let humanScore = 0;
let computerScore = 0;

//function to get random rock , paper or scissors

function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if( randomNum === 0){
        computerChoice = "rock";
    }else if( randomNum === 1){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }

    return computerChoice;

}



//function to get user choice

function getHumanChoice(){
    let userChoice = prompt("Please enter your choice.");
    //console.log("User Input : "+userChoice);
    return userChoice;
}


//function to play a single round of game

function playRound(humanChoice, compChoice){
    humanChoice = humanChoice.toLowerCase();
console.log(" humanChoice "+ humanChoice);
console.log(" compChoice "+ compChoice);

 let message ="";
if(humanChoice === 'rock' && compChoice === 'scissors'){
     message = "Rock beats scissors !";
    humanScore++;
}else if(humanChoice === 'paper' && compChoice ==='rock' ){
    message = "Paper beats rock !";
    humanScore++;
}else if( humanChoice === 'scissors' && compChoice ==='paper'){
   message = "Scissors beat paper !";
    humanScore++;
}else if(humanChoice === 'rock' && compChoice ==='paper' ){
    message = "Paper beats rock !";
    computerScore++;
}else if(humanChoice === 'paper' && compChoice ==='scissors' ){
    message = "Scissors beat paper !";
    computerScore++;
}else if(humanChoice === 'scissors' && compChoice ==='rock' ){
    message = "Rock beats scissors !";
    computerScore++;
}

console.log(" Human Score : "+ humanScore);
console.log(" Computer Score : "+ computerScore);

if(humanScore > computerScore){
    console.log("You Win! "+message);
}else if(humanScore < computerScore){
    console.log("You Lose! "+message);
}else{
    console.log("It's a Tie");
}

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection,computerSelection);
