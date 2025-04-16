

//declare global variables to keep track of score

let humanScore = 0;
let computerScore = 0;

//function to get random rock , paper or scissors

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;

}



//function to get user choice

function getHumanChoice() {
    let userChoice = prompt("Please enter your choice.");
    //console.log("User Input : "+userChoice);
    return userChoice;
}


//function to play a single round of game

function playRound(humanChoice, compChoice) {
    const showSelection = document.querySelector(".show-selection");

    if (showSelection.hasChildNodes()) {
        showSelection.textContent = "";
    }


    const resultSect = document.querySelector(".result-section");

    if (resultSect.hasChildNodes()) {
        resultSect.textContent = "";
    }

    if (humanScore > 4) {
        showSelection.textContent = "You Win!" + " Your Final Score : " + humanScore + " Computer's Final Score : " + computerScore;
        return;
    } else if (computerScore > 4) {
        showSelection.textContent = "You Lose!" + " Your Final Score : "+ humanScore + " Computer's Final Score : " + computerScore;
        return;
    } else {
        humanChoice = humanChoice.toLowerCase();

        const currentHumanChoice = document.createElement("div");
        currentHumanChoice.setAttribute("id", "curr-human-choice");
        currentHumanChoice.textContent = "Your Choice : " + humanChoice;

        const currentComputerChoice = document.createElement("div");
        currentComputerChoice.setAttribute("id", "curr-comp-choice");
        currentComputerChoice.textContent = "Computer's Choice : " + compChoice;

        showSelection.appendChild(currentHumanChoice);
        showSelection.appendChild(currentComputerChoice);


        let message = "";
        if (humanChoice === 'rock' && compChoice === 'scissors') {
            message = "Rock beats scissors!";
            humanScore++;
        } else if (humanChoice === 'paper' && compChoice === 'rock') {
            message = "Paper beats rock!";
            humanScore++;
        } else if (humanChoice === 'scissors' && compChoice === 'paper') {
            message = "Scissors beat paper!";
            humanScore++;
        } else if (humanChoice === 'rock' && compChoice === 'paper') {
            message = "Paper beats rock!";
            computerScore++;
        } else if (humanChoice === 'paper' && compChoice === 'scissors') {
            message = "Scissors beat paper!";
            computerScore++;
        } else if (humanChoice === 'scissors' && compChoice === 'rock') {
            message = "Rock beats scissors!";
            computerScore++;
        }else{
            message = "It's a Draw!!";
        }





        const currentScore = document.createElement("div");
        currentScore.setAttribute("class", "current-score");

        const currentHumanScore = document.createElement("p");
        currentHumanScore.setAttribute("class", "curr-human-score");
        currentHumanScore.textContent = "Your Score is : " + humanScore;

        const currentComputerScore = document.createElement("p");
        currentComputerScore.setAttribute("class", "curr-comp-score");
        currentComputerScore.textContent = "Computer's Score is : " + computerScore;

        const msg = document.createElement("p");
        msg.textContent = message;
        currentScore.appendChild(msg);
        currentScore.appendChild(currentHumanScore);
        currentScore.appendChild(currentComputerScore);
       


        resultSect.appendChild(currentScore);



    }



}

const userSelectionBtn = document.querySelector(".user-input");

userSelectionBtn.addEventListener('click', (event) => {
    let humanSelection = "";
    if (event.target.alt != "" && event.target.alt != undefined) {
        humanSelection = event.target.alt;
    } else {
        humanSelection = event.target.id;
    }

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});

// function playGame() {

//     for (let i = 0; i < 5; i++) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }


//     console.log(" Human Score final: " + humanScore);
//     console.log(" Computer Score final: " + computerScore);

//     if (humanScore > computerScore) {
//         console.log("You Win!");
//     } else if (humanScore < computerScore) {
//         console.log("You Lose!");
//     } else {
//         console.log("It's a Tie");
//     }
// }


// playGame();