function getComputerChoice(){
    switch(getRandomInt(3)){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
    }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    // computer wins the round
    if((computerChoice === "rock" && humanChoice === "scissors") || (computerChoice === "scissors" && humanChoice === "paper") || (computerChoice === "paper" && humanChoice === "rock")){
        console.log(`You lose! The computer chose ${computerChoice}!`)
        computerScore++
    // human wins the round
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")){
        console.log(`You won! The computer chose ${computerChoice}!`)
        humanScore++
    // draw
    } else if (humanChoice === computerChoice){
        console.log(`It's a draw! The computer chose ${computerChoice}!`)
    } else {
        console.error(`The computer chose ${computerChoice}!`)
    }
}

const humanSelection = () => prompt("Enter your choice: ");

function playGame(){
    for(i = 0; i < 5 ; i++){
        playRound(humanSelection(), getComputerChoice())
    }
    
    if(humanScore === computerScore){
        console.log("It's an overall draw!")
    } else if( humanScore >= computerScore){
        console.log("YOU WON!")
    } else {
        console.log("YOU WON!")
    }
}

playGame()