//stockage du score
let humanScore = 0
let computerScore = 0


for (let a = 0 ; a != 5 ; a++) {

// Fonction pour avoir le choix de l'ordi
function getComputerChoice() {
    let odd = Math.random()

    if (odd < 0.33) {
      return "rock"
    } else if (0.33 < odd && odd < 0.66) {
      return "paper"
    } else if (0.66 < odd) {
      return "scissors"
    }
  }


  //Fonction pour avoir le choix de l'utilisateur
  function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors ?")
    //choice = choice.toLowerCase()
    return choice
  }


  //fonction pour jouer un round
  function playRound() {

    if (computerChoice == humanChoice) {
      console.log("It's a draw")
    }
    else if (computerChoice == "rock" && humanChoice == "paper") {
      console.log("you won! Paper beats rock")
      humanScore++
    }
    else if (computerChoice == "paper" && humanChoice == "rock") {
      console.log("you lost! Paper beats rock")
      computerScore++
    }
    else if (computerChoice == "rock" && humanChoice == "scissors") {
      console.log("you lost! rock beats scissors")
      computerScore++
    }
    else if (computerChoice == "scissors" && humanChoice == "rock") {
      console.log("you won! rock beats scissors")
      humanScore++
    }
    else if (computerChoice == "scissors" && humanChoice == "paper") {
      console.log("you lost! scissors beats paper")
      computerScore++
    }
    else if (computerChoice == "paper" && humanChoice == "scissors") {
      console.log("you won! scissors beats paper")
      humanScore++
    }
  }

  const computerChoice = getComputerChoice()
  const humanChoice = getHumanChoice()

  //Fonction pour jouer 5 rounds
    playRound()
    console.log(`The score is ${humanScore} - ${computerScore}`)
}

if (humanScore > computerScore) {
    console.log("Bien joué tu as gagné")
} else if (computerScore > humanScore) {
    console.log("t'as perdu trop la loose")
} else {
    console.log("C'est un match nul")
}