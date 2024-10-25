"use strict";


function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"]
  let randomNum = Math.floor(Math.random() * 3)
  console.log("Computer chose: " + choices[randomNum])
  return choices[randomNum]
}


function getHumanChoice() {
  let choice = prompt("Choose: Rock, Paper, or Scissors").toLowerCase().trim()
  console.log("You chose: " + choice)
  return choice
}


let playerScore = 0
let computerScore = 0


function round(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("It's a tie!")
    return
  }

  switch (playerChoice + " vs " + computerChoice) {
    case "rock vs scissors":
      console.log("Rock beats Scissors, you win!")
      playerScore++
      break
    case "paper vs rock":
      console.log("Paper beats Rock, you win!")
      playerScore++
      break
    case "scissors vs paper":
      console.log("Scissors beats Paper, you win!")
      playerScore++
      break
    case "scissors vs rock":
      console.log("Rock beats Scissors, you lose!")
      computerScore++
      break
    case "rock vs paper":
      console.log("Paper beats Rock, you lose!")
      computerScore++
      break
    case "paper vs scissors":
      console.log("Scissors beats Paper, you lose!")
      computerScore++
      break
    default:
      console.log("Invalid input: Try again.")
  }
}

function playGame() {
  // while (playerScore < 5 && computerScore < 5) {
  // round(getHumanChoice(), getComputerChoice())
  // }

  // (playerScore < 5) ? alert("You Lose!") : alert("You win!")
}

playGame()