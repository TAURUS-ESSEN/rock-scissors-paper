'use strict';
import { playRound, playerScore, computerScore, round } from "./index.js";
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", ()=> {
    document.getElementById('gameTurn__computerChoice').textContent = "Computer's turn..";
    document.getElementById('gameTurn__playerChoice').innerHTML = `<img src=img/${button.dataset.id}.png>`;
    document.getElementById('winnerTextArea').textContent = '';
    
    buttons.forEach(button => button.disabled = true);
    setTimeout(() => {
        playRound(button.dataset.id);  
    }, 2000);
}));

export function drawGameboard (value, winner) {
    
    document.getElementById('scores__playerScore').textContent = playerScore;
    document.getElementById('scores__computerScore').textContent = computerScore;
    document.getElementById('scores__roundNumber').textContent = round;

    const computerchoice =  document.getElementById('gameTurn__computerChoice');
    const img = document.createElement("img");
    img.style.opacity = "0";
    img.src = `img/${value}.png`;
    computerchoice.innerHTML = "";
    computerchoice.appendChild(img);   
    buttons.forEach(button => button.disabled = false);    

    setTimeout(() => {
        img.style.transition = "opacity 2.5s ease"; 
            img.style.opacity = "1"; 
    document.getElementById('winnerTextArea').textContent = winner;

    }, 550); 
}

export function press() {
    document.getElementById('winnerTextArea').classList.add("jump");
    setTimeout(() => {
        document.getElementById('winnerTextArea').classList.remove("jump");
    }, 3000);
}