function getComputerChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random ==0){
        return "Rock";
    }
    else if(random == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors:");
    choice = choice[0].toUpperCase() + choice.slice(1);
    return choice;
}
let humanscore = 0;
let computerscore = 0;
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
function playGame(){
    
    for(let i = 0;i<5;i++){
        const computerchoice = getComputerChoice();
        const humanchoice = getHumanChoice();
        console.log(humanchoice);
        console.log(computerchoice);
        playRound(computerchoice,humanchoice);
    }
    if(humanscore > computerscore){
        console.log("You have won with a score of " + humanscore);
    }
    else if(computerscore > humanscore){
        console.log("You lost by" + (computerscore - humanscore) + " points.");
    }
    else{
        console.log("It's a draw! Both got " + computerscore + "points.");
    }
}
playGame();