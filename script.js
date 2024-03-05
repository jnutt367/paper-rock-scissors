let playerScore = 0;
let computerScore = 0;

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection) {
    // Get computer's choice
    const computerSelection = getComputerChoice();

    // Determine the winner or tie of the round
    let result;
    if (playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        result = `You win! ${playerSelection} beats ${computerSelection}.`;
        playerScore++;
    } else {
        result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerScore++;
    }

    // Display results and running score
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = result;

    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    // Announce winner if one player reaches 5 points
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? "Player 1" : "Nemesis Enforcer";
        resultsDiv.textContent += `\n${winner} wins the game!`;
        // Disable buttons to prevent further plays
        document.querySelectorAll('button').forEach(button => {
            button.disabled = true;
        });
    }
}

// Add event listeners to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.textContent);
    });
});

