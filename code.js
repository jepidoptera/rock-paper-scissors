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
    [-1, 1, 0, 1, 0],
    [0, -1, 1, 0, 1],
    [1, 0, -1, 1, 0],
    [0, 1, 0, -1, 1],
    [1, 0, 1, 0, -1]
];

var descriptions = [
    "rock", "smashes", "scissors", "cuts", "paper",
    "disproves", "Spock", "breaks", "scissors", "beheads", 
    "lizard", "poisons", "Spock", "vaporizes", "rock", 
    "crushes", "lizard", "eats", "paper", "covers", "rock"];

var score = [0, 0, 0];

function choose(choice){
    // get human's and computer's moves
    var weapon = [rps[choice], rps[response()]];
    // who won?
    var winner = chooseWinner(weapon[0], weapon[1]);
    var loser = -(winner - 1);
    // display info
    document.getElementById("human").textContent = 
        "human chooses: " + weapon[0];
    document.getElementById("computer").textContent = 
        "computer chooses: " + weapon[1];
    var verb;
    // fancy verbs
    if (winner >= 0) {
        var verbPos = descriptions.indexOf(weapon[winner]);
        verb = descriptions[verbPos + 2] == weapon[loser] ?
            descriptions[verbPos + 1]
            : descriptions[descriptions.indexOf(weapon[winner], verbPos + 3) + 1];
        // describe
        document.getElementById("verbs").textContent = 
            weapon[winner] + " " + verb + " " + weapon[loser];      
    }
    else {
        // tie match
        winner = -1;
        verb = ["equals", "meets", "matches", "is", "sees"][choice];
        // describe
        document.getElementById("verbs").textContent = 
            weapon[0] + " " + verb + " " + weapon[0];      
    }
    // increment score
    winner ++;
    score[winner]++;
    // say who won
    document.getElementById("winner").textContent = "winner: " + players[winner];
    // display new score
    var scorebox = document.getElementById("score");
    scorebox.innerHTML = "";
    for (i = 0; i < score.length; i++){
        scorebox.innerHTML += players[i] + ": " + score[i] + "<br>";
    }
}

function response(){
    // just pick on randomly
    return Math.floor(Math.random() * rps.length);
}

function chooseWinner(player1, player2){
    // consult the table
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
    rps = [
        "rock",
        "paper",
        "scissors",
        "Spock",
        "lizard"
    ];    
    // show the extra buttons
    document.getElementById("plusButton").style.display = "none";
    document.getElementById("lizardButton").style.display = "inline-block";
    document.getElementById("spockButton").style.display = "inline-block";
    document.getElementById("helpButton").style.display = "inline-block";
}