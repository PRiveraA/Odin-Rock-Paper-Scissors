"use strict";

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]
  let randomNum = Math.floor(Math.random() * 3)
  console.log("Computer chose: " + choices[randomNum])
  return choices[randomNum]
}

function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie!")
    return
  }

  switch (playerChoice + " vs " + computerChoice) {
    case "rock vs scissors":
      console.log("Rock beats Scissors, you win round!")
      playerScore++
      break
    case "paper vs rock":
      console.log("Paper beats Rock, you win round!")
      playerScore++
      break
    case "scissors vs paper":
      console.log("Scissors beats Paper, you win round!")
      playerScore++
      break
    case "scissors vs rock":
      console.log("Rock beats Scissors, Computer wins round!")
      computerScore++
      break
    case "rock vs paper":
      console.log("Paper beats Rock, Computer wins round!")
      computerScore++
      break
    case "paper vs scissors":
      console.log("Scissors beats Paper, Computer wins round!")
      computerScore++
      break
    default:
      console.log("Invalid input: Try again.")
  }

  console.log(computerScore)
  console.log(playerScore)

  if (!(playerScore < 5 && computerScore < 5)) {
    (playerScore < 5) ? alert("You lose Game!") : alert("You win Game!")
    playerScore = 0
    computerScore = 0
  }

}

const buttons = document.querySelector(".button-section")

buttons.addEventListener("click", function (e) {

  let playerChoice = e.target.textContent.toLowerCase()
  round(playerChoice, getComputerChoice())

})
