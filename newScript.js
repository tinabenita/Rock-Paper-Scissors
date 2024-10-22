const choices = ['Rock', 'Paper', 'Scissors'];

let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

let choiceList = {
    Rock: "fa-solid fa-hand-fist", 
    Paper: "fa-solid fa-hand", 
    Scissors: "fa-solid fa-hand-peace"
};

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const humanChoiceIcon = document.querySelector("#human-icon");
const compChoiceIcon = document.querySelector("#computer-icon");
const resultDiv = document.querySelector(".game-result");

function getComputerChoice() {
    let valIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[valIndex];
    return computerChoice;
}

function playGame(humanChoice, computerChoice) {
    humanChoiceIcon.className = choiceList[humanChoice];
    compChoiceIcon.className= choiceList[computerChoice];
    let result ="";

    if (humanChoice === computerChoice) {
        result = 'It\'s a tie!';
        resultDiv.style.backgroundColor = "skyblue"; 
        resultDiv.style.color = "darkblue"; 
    } 
    else if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        humanScore += 1;
        result = `You win!! ${humanChoice} beats ${computerChoice}.`;
        resultDiv.style.backgroundColor = "lightgreen"; 
        resultDiv.style.color = "darkgreen"; 

    } 
    else {
        computerScore += 1;
        result = `You lose!! ${computerChoice} beats ${humanChoice}.`;
        resultDiv.style.backgroundColor = "lightcoral"; 
        resultDiv.style.color = "darkred"; 

    }
    resultDiv.textContent = result;
}

rockButton.addEventListener("click", () => {
    humanChoice = 'Rock';
    playGame(humanChoice, getComputerChoice());
});

paperButton.addEventListener("click", () => {
    humanChoice = 'Paper';
    playGame(humanChoice, getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    humanChoice = 'Scissors';
    playGame(humanChoice, getComputerChoice());
});