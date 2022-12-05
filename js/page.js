//MAKES SCORE WORK > WILL RESET EACH TIME YOU LEAVE THE PAGE
sessionStorage.wins = 0;
sessionStorage.losses = 0;
//PLAYS GAME
function game(x){
    sessionStorage.playerchoice = x;
// DECLARES RANDOM NUMBER
var y = Math.ceil(Math.random() * 3);
if(y == 1){
    sessionStorage.opponentchoice = "rock";
}
else if(y == 2){
    sessionStorage.opponentchoice = "paper";
}
else if(y == 3){
    sessionStorage.opponentchoice = "scissors";
}
if((sessionStorage.playerchoice == "rock") && (sessionStorage.opponentchoice == "paper")){
    sessionStorage.result = "lose";
    }
else if((sessionStorage.playerchoice == "rock") && (sessionStorage.opponentchoice == "scissors")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "paper") && (sessionStorage.opponentchoice == "rock")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "paper") && (sessionStorage.opponentchoice == "scissors")){
  sessionStorage.result = "lose";
  }
else if((sessionStorage.playerchoice == "scissors") && (sessionStorage.opponentchoice == "paper")){
    sessionStorage.result = "win";
    }
else if((sessionStorage.playerchoice == "scissors") && (sessionStorage.opponentchoice == "rock")){
    sessionStorage.result = "lose";
    }
else if (sessionStorage.playerchoice == sessionStorage.opponentchoice){
    sessionStorage.result = "tie";
}
//CREATES NOTIFICATION 
if(sessionStorage.result == "win") {
    document.getElementById("result").innerHTML="You Won!";
    sessionStorage.wins++;
    document.getElementById("pscore").innerHTML = sessionStorage.wins;
}
else if(sessionStorage.result == "lose") {
    document.getElementById("result").innerHTML="You Lose!";
    sessionStorage.losses++;
    document.getElementById("oscore").innerHTML = sessionStorage.losses;
}
else if(sessionStorage.result == "tie") {
    document.getElementById("result").innerHTML="It's A Tie!";
}
//SHOWS OPPONENTS CHOICE
document.getElementById("o-img").src="svg/"+sessionStorage.opponentchoice+".svg";
}




	




