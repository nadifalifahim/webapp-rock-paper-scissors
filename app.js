let playerScore = 0;
let computerScore = 0;
let r = document.getElementById("rock").addEventListener("click", rockTrigger);
let p = document.getElementById("paper").addEventListener("click", paperTrigger);
let s = document.getElementById("scissors").addEventListener("click", scissorsTrigger);
let userInput;
let compInput;
let inputOptions = ["Rock", "Paper", "Scissors"];
let userDisplay = document.getElementById("playerscore");
let compDisplay = document.getElementById("computerscore");
let outputText = document.getElementById("resultText");
let userText = new String("(USER)");
let compText = new String("(COMP)");

function StartGame() {
    playerScore = 0;
    userDisplay.innerHTML = playerScore;
    computerScore = 0;
    compDisplay.innerHTML = computerScore;
    outputText.innerHTML = "New Match <br> Make Your Move &#9996;";
}

function rockTrigger(){
    userInput = 0;
    generateRand();
    showResult();
};

function paperTrigger(){
    userInput = 1;
    generateRand();
    showResult();
};

function scissorsTrigger(){
    userInput = 2;
    generateRand();
    showResult();
};

function generateRand() {
    compInput = Math.floor(Math.random()*3);
};

function showResult(){
    console.log(inputOptions[userInput]);
    console.log(inputOptions[compInput]);
    switch (true){
        case inputOptions[userInput]=="Rock" && inputOptions[compInput]=="Scissors":
        case inputOptions[userInput]=="Paper" && inputOptions[compInput]=="Rock":
        case inputOptions[userInput]=="Scissors" && inputOptions[compInput]=="Paper":
            playerWin();
            break;
        case inputOptions[userInput]=="Rock" && inputOptions[compInput]=="Paper":
        case inputOptions[userInput]=="Paper" && inputOptions[compInput]=="Scissors":
        case inputOptions[userInput]=="Scissors" && inputOptions[compInput]=="Rock":
            playerLose();
            break;
        default:
            draw();
            break;
    }

}


function playerWin(){
    playerScore += 1;
    userDisplay.innerHTML = playerScore;
    console.log(playerScore);
    console.log(computerScore);
    outputText.innerHTML = `${inputOptions[userInput]} ${userText.fontsize(3).fontcolor("yellow")} beats ${inputOptions[compInput]} ${compText.fontsize(3).fontcolor("yellow")} <br> You WIN! &#129305;`;
  };

function playerLose(){
    computerScore += 1;
    compDisplay.innerHTML = computerScore;
    console.log(playerScore);
    console.log(computerScore);
    outputText.innerHTML = `${inputOptions[userInput]} ${userText.fontsize(3).fontcolor("yellow")} beats ${inputOptions[compInput]} ${compText.fontsize(3).fontcolor("yellow")} <br> You Lose &#128064;`;
  };

function draw(){
    outputText.innerHTML = `${inputOptions[userInput]} ${userText.fontsize(3).fontcolor("yellow")} and ${inputOptions[compInput]} ${compText.fontsize(3).fontcolor("yellow")} are equal <br> It's a draw &#128079;`;
};



