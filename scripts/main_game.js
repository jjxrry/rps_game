//function to run game loop best of 5
        //does not increment with tie
//function to check result
//function to generate pcSelect
//variable for pcSelect
//variable for userSelect
//var for userScore
//var for pcScore

let pcSelect;
let userSelect;
let pcScore = 0;
let userScore = 0;

function pcSelection() {
    let pcArrray = ['rock', 'paper', 'scissors']
    let randomIndex = Math.floor(Math.random()*pcArrray.length);
    let pcSelect = pcArrray[randomIndex];
    return pcSelect;
}

function userSelection() {
    let userSelect = prompt("Rock paper or scissors?").toLowerCase();
    return userSelect;
}

function checkResult(userSelect, pcSelect) {
    console.log(userSelect, pcSelect);
    if ((userSelect === 'rock' && pcSelect === 'scissors') || 
        (userSelect === 'paper' && pcSelect === 'rock') || 
        (userSelect === 'scissors' && pcSelect === 'paper')){
        ++userScore;
        return userScore, pcScore;
    }
    else if (userSelect === pcSelect) {
        return userScore, pcScore;
    }
    else {
        ++pcScore;
        return userScore, pcScore;
    }
    //gameresult 0 = win, 1 = tie, 2 = lose
}

function runGame() {
    for (i = 0; i <= 5; ++i){
        let userSelect = userSelection();
        let pcSelect = pcSelection();
        console.log(userSelect, pcSelect);
        checkResult(userSelect, pcSelect);
        console.log(`result is player ${userScore} pc ${pcScore}`)
    }
}
runGame();