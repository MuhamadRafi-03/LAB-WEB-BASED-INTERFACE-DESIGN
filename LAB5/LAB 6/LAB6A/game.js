let gameStarted= false;
let wins= 0;
let losses= 0;
let draw= 0;    
let roundCount= 0;
let results = [];

function startGame() {
    const nameInput = document.getElementById("playerName").value.trim();

    if (nameInput === "") {
        alert("Please enter your name.");
        return;
    }

    
    document.getElementById("welcomeMsg").innerHTML = "Welcome, " + nameInput + "!";
    document.getElementById("startTime").innerHTML = "Game started on: " + new Date();
    
    gameStarted = true;
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    
    if (!gameStarted) {
        alert("Click Start Game first.");
        return;
    }

    const computerChoice = getComputerChoice();
    roundCount++;

    document.getElementById("playerImg").src = playerChoice + ".png";
    document.getElementById("computerImg").src = computerChoice + ".png";

    const resultElement = document.getElementById("result");
    let roundResult = "";

   
    if (playerChoice === computerChoice) {
        roundResult = "Draw";
        draws++;
        resultElement.innerHTML = "It's a Draw!";
        resultElement.style.color = "grey";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult = "Win";
        wins++;
        resultElement.innerHTML = "You Win!";
        resultElement.style.color = "green";
    } else {
        roundResult = "Lose";
        losses++;
        resultElement.innerHTML = "You Lose!";
        resultElement.style.color = "red";
    }

    results.push(roundResult);
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

    const historyBody = document.getElementById("historyBody");
    historyBody.innerHTML += `
        <tr>
            <td>${roundCount}</td>
            <td>${playerChoice}</td>
            <td>${computerChoice}</td>
            <td>${roundResult}</td>
        </tr>
    `;
}


function showSummary() {
    if (results.length === 0) {
        document.getElementById("summaryText").innerHTML = "No rounds played yet.";
        return;
    }

    let winCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "Win") {
            winCount++;
        }
    }

    const winPercentage = Math.round((winCount / results.length) * 100);
    document.getElementById("summaryText").innerHTML = 
        "You played " + results.length + " rounds and won " + winPercentage + "%";
}


function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;
    roundCount = 0;
    results = [];
    gameStarted = false;

    document.getElementById("wins").innerHTML = "0";
    document.getElementById("losses").innerHTML = "0";
    document.getElementById("draws").innerHTML = "0";
    document.getElementById("historyBody").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("summaryText").innerHTML = "";
    document.getElementById("welcomeMsg").innerHTML = "";
    document.getElementById("startTime").innerHTML = "";
    document.getElementById("playerName").value = "";
}