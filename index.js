const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
const choices = [rock, paper, scissors];

const winsDisplay = document.getElementById('wins')
const lossesDisplay = document.getElementById('losses')
const drawsDisplay = document.getElementById('draws')
const winner = document.getElementById('result')

const opposites = new Map();
opposites.set(rock, paper);
opposites.set(paper, scissors);
opposites.set(scissors, rock);

let wins = 0;
let losses = 0;
let draws = 0;

function getRandomMove() {
    let idx = Math.floor(Math.random()*choices.length);
    let move = choices[idx];
    return move;
};

function play(playerMove, botMove) {
    if (playerMove === botMove) {
        draws++;
        winner.innerText = 'Its a draw.'
    } else if (opposites.get(playerMove) === botMove) {
        losses++;
        winner.innerText = 'You lose...'
    } else {
        wins++;
        winner.innerText = 'You win!'
    };
};

function updateScore() {
    winsDisplay.innerText = wins;
    lossesDisplay.innerText = losses;
    drawsDisplay.innerText = draws;
};

function renderMoves() {
    // do something.
};

const render = (playerMove) => {
    botMove = getRandomMove()
    play(playerMove, botMove);
    renderMoves(playerMove, botMove);
    updateScore();
};

document.getElementById('rock').addEventListener("click", () => {
    render(rock);
});

document.getElementById('paper').addEventListener("click", () => {
    render(paper);
});

document.getElementById('scissors').addEventListener("click", () => {
    render(scissors);
});

document.getElementById('reset').addEventListener("click", () => {
    winner.innerText = '';
    wins = 0;
    losses = 0;
    draws = 0;
    updateScore();
})
