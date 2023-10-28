const choices = ['rock', 'paper', 'scissors'];
const opposites = new Map([
    ['rock', 'paper'],
    ['paper', 'scissors'],
    ['scissors', 'rock'],
]);
const imgPaths = new Map([
    ['rock', 'images/rock.png'],
    ['paper', 'images/paper.png'],
    ['scissors', 'images/scissors.png'],
]);

const winsDisplay = document.getElementById('wins')
const lossesDisplay = document.getElementById('losses')
const drawsDisplay = document.getElementById('draws')
const winner = document.getElementById('result')

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

function reset() {
    let userContainer = document.getElementById('user')
    let botContainer = document.getElementById('bot')

    userContainer.innerHTML = ''
    botContainer.innerHTML = ''

    winner.innerText = '';
    wins = 0;
    losses = 0;
    draws = 0;
    updateScore();
}

function updateScore() {
    winsDisplay.innerText = wins;
    lossesDisplay.innerText = losses;
    drawsDisplay.innerText = draws;
};

function renderMove(title, id, move) {
    let displayContainer = document.getElementById(id)
    let titleContainer = document.createElement('div')
    let iconCon = document.createElement('div')
    let moveIcon = document.createElement('img');

    displayContainer.innerHTML = ''
    iconCon.className = 'display-move'

    titleContainer.innerText = title
    moveIcon.src = imgPaths.get(move)

    displayContainer.appendChild(titleContainer)
    displayContainer.appendChild(iconCon)
    iconCon.appendChild(moveIcon)
};

function renderMoves(user, bot) {
    renderMove('You', 'user', user)
    renderMove('Bot', 'bot', bot)
};

const render = (playerMove) => {
    botMove = getRandomMove()
    play(playerMove, botMove);
    renderMoves(playerMove, botMove);
    updateScore();
};

document.getElementById('rock').addEventListener("click", () => {
    render('rock');
});

document.getElementById('paper').addEventListener("click", () => {
    render('paper');
});

document.getElementById('scissors').addEventListener("click", () => {
    render('scissors');
});

document.getElementById('reset').addEventListener("click", reset)
