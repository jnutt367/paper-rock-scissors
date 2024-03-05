// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    // Determine the winner or tie of the round
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Function to play the game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        // Prompt user for input
        let playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");

        // Validate user input
        while (!['rock', 'paper', 'scissors'].includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Invalid choice! Please enter Rock, Paper, or Scissors:");
        }

        // Get computer's choice
        const computerSelection = getComputerChoice();

        // Play round
        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    // Determine winner
    let winner;
    if (playerScore > computerScore) {
        winner = "You win!";
    } else if (playerScore < computerScore) {
        winner = "You lose!";
    } else {
        winner = "It's a tie!";
    }

    // Print final scores and winner
    console.log(`Final Scores:\nPlayer: ${playerScore}\nComputer: ${computerScore}\n${winner}`);
}

// Call the playGame function to start the game
playGame();
