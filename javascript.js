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
getComputerChoice();