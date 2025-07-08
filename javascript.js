function getComputerChoice(){
    let random = Math.random();
    if(random < 0.5){
        console.log("Rock");
    }
    else if(random > 0.5){
        console.log("Paper");
    }
    else{
        console.log("Scissors");
    }
}
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors:");
    console.log(choice);
}
function playRound(computerchoice,humanchoice){
    if(computerchoice == humanchoice){
        console.log("It's a draw!");
        humanscore++;
        computerscore++;
    }
    else if (computerchoice == "Rock" && humanchoice == "Scissors"){
        console.log("Rock beats scissors!");
        computerscore++;
    }
    else if(computerchoice=="Scissors" && humanchoice == "Paper"){
        console.log("Scissors cuts paper");
        computerscore++;
    }
    else if (computerchoice == "Paper" && humanchoice == "Rock"){
        console.log("Paper envelops rock.");
        computerscore++;
    }
    else{
        console.log("You win.");
        humanscore++;
    }

}
let humanscore = 0;
let computerscore = 0;
getComputerChoice();
getHumanChoice();
const computerchoice = getComputerChoice();
const humanchoice = getHumanChoice();
