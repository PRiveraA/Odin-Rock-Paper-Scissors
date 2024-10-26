"use strict";

let playerScore = 0
let computerScore = 0

function getComputerChoice() {
  let choiceDisplay = document.querySelector(".crbottom")
  let choices = ["rock", "paper", "scissors"]
  let randomNum = Math.floor(Math.random() * 3)
  choiceDisplay.textContent = `CPU choice: ${choices[randomNum].charAt(0).toUpperCase()}${choices[randomNum].slice(1)}`
  return choices[randomNum]
}

let playerScoreDisplay = document.querySelector(".clmiddle")
let computerScoreDisplay = document.querySelector(".crmiddle")

function round(playerChoice, computerChoice) {

  let announcement = document.querySelector(".screen-bottom")

  if (playerChoice === computerChoice) {
    announcement.textContent = "It's a tie!"
  } else {
    switch (playerChoice + " vs " + computerChoice) {
      case "rock vs scissors":
        announcement.textContent = "Rock beats Scissors, you win round!"
        playerScore++
        break
      case "paper vs rock":
        announcement.textContent = "Paper beats Rock, you win round!"
        playerScore++
        break
      case "scissors vs paper":
        announcement.textContent = "Scissors beats Paper, you win round!"
        playerScore++
        break
      case "scissors vs rock":
        announcement.textContent = "Rock beats Scissors, Computer wins round!"
        computerScore++
        break
      case "rock vs paper":
        announcement.textContent = "Paper beats Rock, Computer wins round!"
        computerScore++
        break
      case "paper vs scissors":
        announcement.textContent = "Scissors beats Paper, Computer wins round!"
        computerScore++
        break
    }

    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore

    if (!(playerScore < 5 && computerScore < 5)) {
      (playerScore < 5) ? announcement.textContent = "You lose Game!" : announcement.textContent = "You win Game!"
      playerScore = 0
      computerScore = 0
    }
  }
}

const buttons = document.querySelector(".button-section")

buttons.addEventListener("click", function (e) {

  let playerChoice = e.target.textContent.toLowerCase()
  round(playerChoice, getComputerChoice())

  let choiceDisplay = document.querySelector(".clbottom")
  choiceDisplay.textContent = `Your choice: ${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)}`

})
