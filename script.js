document.querySelectorAll(".choice").forEach(choice =>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.id;
    const computerChoice = ["rock","paper","scissors"] [Math.floor(Math.random()*3)];
    let resultText = "";
    let computerScore = 0;
    let playerScore = 0;

    if (userChoice === computerChoice){
      resultText = "It's a tie !";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ){
      resultText = "You won !";
      playerScore++;
    } else {
      resultText = "You lost !";
      computerScore++;
    }

    document.getElementById("result").textContent = "The computer chose : " + computerChoice + ", " + resultText;

  });
});