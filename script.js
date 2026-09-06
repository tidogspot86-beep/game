function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  //declares a variable choices of 3 choices 
  const randomNumber = Math.floor(Math.random() * choices.length);
  //Math.random() to generate a random number 
  //Math.floor() deletes decimals 

  return choices[randomNumber];
}
//creates a function called computerPlay that randomly selects one of the three choices 


function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  }

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "player";
  }

  return "computer";
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  //declares two variables to keep track of the scores 

  alert(
    "Welcome to Rock Paper Scissors!\n\n" +
    "The first player to win 3 rounds wins the game.\n\n" +
    "You will enter your choices using pop-up prompts.\n" +
    "The computer will choose its move before you enter yours.\n" +
    "Its choice will be locked and hidden until you make your selection.\n" +
    "This means the computer cannot change its move after seeing your answer.\n " +
    "Round results will also appear in the browser console.\n\n" +
    "Good luck!"
  ); //displays instructions in a windows 

  while (playerScore < 3 && computerScore < 3) { //keeps teh game while player and computer have less than 3 rounds 
    let playerInput = prompt(
      `Score: You ${playerScore} - ${computerScore} Computer\n\nChoose Rock, Paper, or Scissors:`
    );

    if (playerInput === null) { // if player cancels the game 
      alert("Game cancelled. Thanks for playing!");
      return;
    }

    playerInput = playerInput.trim().toLowerCase();
    //trim() removes whitespace from both ends of a string 

    if (
      playerInput !== "rock" &&
      playerInput !== "paper" &&
      playerInput !== "scissors"
    ) {
      alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
      continue; //continue stops the play and starts new one 
    }


    playerInput =
      playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    //charAt(0).toUpperCase() gets the first letter of the string and makes it uppercase 
    //slice(1) gets the rest of the string 

    /*COMPUTER PLAYS */

    const computerSelection = computerPlay();

     alert(
      "The computer has locked in its choice and keep it hidden!\n\n" +
      "Press OK or CLOSE to know the winner."
    );


    const result = playRound(playerInput, computerSelection);

    console.log(`You chose: ${playerInput}`);
    console.log(`Computer chose: ${computerSelection}`);

    if (result === "draw") {
      alert(
        `It's a draw!\n\nYou chose ${playerInput}.\nComputer chose ${computerSelection}.\n\nNo points awarded.`
      );

      console.log("Draw! No points awarded.");
    } else if (result === "player") {
      playerScore++;

      alert(
        `You win this round! \n\n${playerInput} beats ${computerSelection}.\n\nScore: You ${playerScore} - ${computerScore} Computer`
      );

      console.log("You won the round!");
    } else {
      computerScore++;

      alert(
        `The computer wins this round! 🤖\n\n${computerSelection} beats ${playerInput}.\n\nScore: You ${playerScore} - ${computerScore} Computer`
      );

      console.log("Computer won the round.");
    }
  }

  if (playerScore === 3) {
    alert(
      `You won the game!\n\nFinal score:\nYou ${playerScore} - ${computerScore} Computer`
    );

    console.log("You are the champion!");
  } else {
    alert(
      `The computer won the game!\n\nFinal score:\nYou ${playerScore} - ${computerScore} Computer`
    );

    console.log("The computer is the champion!");
  }
}

game();
