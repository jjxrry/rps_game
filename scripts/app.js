const userRock = document.getElementById('btnRock');
const userPaper = document.getElementById('btnPaper');
const userScissors = document.getElementById('btnScissors');
const btnContainer = document.querySelector('.button-container');
const resultReport = document.querySelector('.resultCard')
const humanScoreTrack = document.querySelector('.humanScore');
const pcScoreTrack = document.querySelector('.robotScore');
const restartButton = document.querySelector('.btnRestart')
let pcSelect;
let userSelect;
let pcScore = 0;
let userScore = 0;

pcScoreTrack.textContent = `Player: ${userScore}`;
humanScoreTrack.textContent = `Computer: ${pcScore}`;

userRock.addEventListener('click', () => handleClick('rock'));
userPaper.addEventListener('click', () => handleClick('paper'));
userScissors.addEventListener('click', () => handleClick('scissors'));
// restartButton.addEventListener('click', () => restartGame(userScore, pcScore));

function handleClick(userSelect) {
    runGame(userSelect);
}

function pcSelection() {
    let pcArrray = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random()*pcArrray.length);
    let pcSelect = pcArrray[randomIndex];
    return pcSelect;
}

function playRound(userSelect, pcSelect) {
    if ((userSelect === 'rock' && pcSelect === 'scissors') || 
    (userSelect === 'paper' && pcSelect === 'rock') || 
    (userSelect === 'scissors' && pcSelect === 'paper')){
        ++userScore;
        userSelect = '';
        resultReport.textContent = `Player win!`;
        pcScoreTrack.textContent = `Player: ${userScore}`;
        humanScoreTrack.textContent = `Computer: ${pcScore}`;
    }
    else if (userSelect === pcSelect) {
        userSelect = '';
        resultReport.textContent = `A tie! Fight again!`;
        pcScoreTrack.textContent = `Player: ${userScore}`;
        humanScoreTrack.textContent = `Computer: ${pcScore}`;
    }
    else {
        ++pcScore;
        userSelect = '';
        resultReport.textContent = `CPU win!`;
        pcScoreTrack.textContent = `Player: ${userScore}`;
        humanScoreTrack.textContent = `Computer: ${pcScore}`;
    }
}

function gameResult(userScore, pcScore) {
}

function runGame(userSelect) {
    let pcSelect = pcSelection();
    playRound(userSelect, pcSelect);
    //console log to check functionality
    console.log(`player choice: ${userSelect} | pc choice ${pcSelect}`)
    console.log(`pc: ${pcScore} \nplayer: ${userScore}`)

    if (userScore === 5) {
        resultReport.textContent = `HOORAY! Humanity has prevailed!`;
        pcScore = 0;
        userScore = 0;
        pcScoreTrack.textContent = `Player: ${userScore}`;
        humanScoreTrack.textContent = `Computer: ${pcScore}`;
        // btnContainer.remove('div');
    }
    else if (pcScore === 5) {
        resultReport.textContent = `OH NO! Humanity has lost.`;
        pcScore = 0;
        userScore = 0;
        pcScoreTrack.textContent = `Player: ${userScore}`;
        humanScoreTrack.textContent = `Computer: ${pcScore}`;
        // btnContainer.remove('div');
    }
}

// function restartGame(userScore, pcScore) {
//     userScore = 0;
//     pcScore = 0;
//     return userScore, pcScore;
// }