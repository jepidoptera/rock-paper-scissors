var rps = [
    "rock",
    "paper",
    "scissors"
];

var players = [
    "tie",
    "human",
    "computer"
];

var winnerTable = [
    [0, 2, 1, 2, 1],
    [1, 0, 2, 1, 2],
    [2, 1, 0, 2, 1],
    [1, 2, 1, 0, 2],
    [2, 1, 2, 1, 0]
];

var score = [0, 0, 0];

function choose(choice){
    var player1 = rps[choice];
    var player2 = response();
    var winner = chooseWinner(player1, player2);
    document.getElementById("human").textContent = 
        "human chooses: " + player1;
    document.getElementById("computer").textContent = 
        "computer chooses: " + player2;
    document.getElementById("winner").textContent = "winner: " + players[winner];
    score[winner]++;
    var scorebox = document.getElementById("score");
    scorebox.innerHTML = "Score: <br>";
    for (i = 0; i < score.length; i++){
        scorebox.innerHTML += players[i] + ": " + score[i] + "<br>";
    }
}

function response(){
    return rps[parseInt(Math.random() * rps.length)];
}

function chooseWinner(player1, player2){
    return winnerTable[rps.indexOf(player1)][rps.indexOf(player2)];
}

function showDirections(){
    document.getElementById("directions").style.display = "block";
}

function hideDirections(){
    document.getElementById("directions").style.display = "none";
}

function expand(){
    // let's make this a 5-way game
    var rps = [
        "rock",
        "paper",
        "scissors",
        "spock",
        "lizard"
    ];    
    // show the extra buttons
    document.getElementById("plusButton").style.display = "none";
    document.getElementById("lizardButton").style.display = "inline-block";
    document.getElementById("spockButton").style.display = "inline-block";
    document.getElementById("helpButton").style.display = "inline-block";
}