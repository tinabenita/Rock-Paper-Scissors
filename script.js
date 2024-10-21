const choices = ['rock', 'paper', 'scissors'];

let computerChoice = "";
let humanChoice = "";

function getComputerChoice() {
    let valIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[valIndex];
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("What do you wanna pick? (rock, paper, scissors)").toLowerCase();
    if (choices.includes(humanChoice)) {
        return humanChoice;
    } else {
        alert("Choose either rock, paper, or scissors!!!");
        return getHumanChoice(); 
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice, computerChoice) {
    if (!humanChoice || !choices.includes(humanChoice)) {
        console.log("Invalid human choice! Please choose 'rock', 'paper', or 'scissors'.");
        return;
    }

    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    } 
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore += 1;
        console.log(`You win!! ${humanChoice} beats ${computerChoice}.`);
    } 
    else {
        computerScore += 1;
        console.log(`You lose!! ${computerChoice} beats ${humanChoice}.`);
    }
}

let counter = 5;

function gameRounds() {
    while (counter > 0) {
        playGame(getHumanChoice(), getComputerChoice());
        counter--;
    }
    if (humanScore > computerScore) {
       alert(`You have won this game with a score of ${humanScore} to ${computerScore}!!`);
    } 
    else if (humanScore < computerScore) {
        alert(`You have lost this game with a score of ${computerScore} to ${humanScore}!!`);
    } 
    else {
        alert("It's a tie!!");
    }
}

gameRounds();
