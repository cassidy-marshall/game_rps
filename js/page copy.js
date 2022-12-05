function game(x) {
    //select a choice//
    // sessionStorage.playerChoice;
    let playerChoice = x;
    // document.getElementById("rock").style.transform = "scale(1)";
    // document.getElementById("paper").style.transform = "scale(1)";
    // document.getElementById("scissors").style.transform = "scale(1)";
    // document.getElementById(sessionStorage.playerChoice).style.transform = "scale(1.4)";
    //computer selects a choice//
var y = Math.ceil(Math.random() * 3);
if (y == 1) {
    sessionStorgae.ooponentChoice = "rock";
}
else if (y == 2) {
    sessionStorage.opponentChoice = "paper";
}
else if (y == 3) {
    sessionStorage.ooponentChoice = "scissors";
}
document.getElementById("o-img".src ="img/") + sessionStorage.opponentChoice + ".svg";
choice = "rock"
    //compare//
    if (sessionStorage.playerChoice == sessionStorage.opponentChoice) {
        sessionStorage.result = "tie";
      }
      else {
        if (sessionStorage.playerChoice == "rock") {
          if (sessionStorage.opponentChoice == "paper") {
            sessionStorage.result = "lose";
          }
          else if (sessionStorage.opponentChoice == "scissors") {
            sessionStorage.result = "win";
          }
        }
        else if (sessionStorage.playerChoice == "paper") {
          if (sessionStorage.opponentChoice == "rock") {
            sessionStorage.result = "win";
          }
          else if (sessionStorage.opponentChoice == "scissors") {
            sessionStorage.result = "lose";
          }
        }
        else if (sessionStorage.playerChoice == "scissors") {
          if (sessionStorage.opponentChoice == "rock") {
            sessionStorage.result = "lose";
          }
          else if (sessionStorage.opponentChoice == "paper") {
            sessionStorage.result = "win";
          }
        }
      }
        }
    //score// 

    //reset// 

