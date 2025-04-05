'use strict';
import { drawGameboard, press } from "./dom.js";
export let playerScore = 0;
export let computerScore = 0;
export let round = 0;
let blinkInterval = 0;
let choiceArray = ["stone", "scissors", "paper"];

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let result  = choiceArray[randomNumber];
    return result;
}

export function playRound(value) {
    let playerChoice = value;
    let winner = '';
    let computerChoice = generateComputerChoice();

    if (playerChoice === computerChoice) { 
        winner = "draw";
    }
    else if (((playerChoice === 'stone') && (computerChoice === 'scissors')) || 
    ((playerChoice === 'scissors') && (computerChoice === 'paper')) ||
    ((playerChoice === 'paper') && (computerChoice === 'stone'))) {
        winner= "Player wins";
        playerScore++;
    }
    else  {
        winner = "Computer wins";
        computerScore++
    }
    round++;
    drawGameboard(computerChoice, winner);
    clearInterval(blinkInterval);
}

startBlinking();

function startBlinking() {
    blinkInterval = setInterval(() => {
        press();
    }, 2000); 

    setTimeout(() => {
        clearInterval(blinkInterval);
    }, 80000); 
}
