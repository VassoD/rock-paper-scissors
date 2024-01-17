/**
 * Determines the winner between the player and the computer based on their choices.
 *
 * @param {object} playerChoice - The choice made by the player.
 * @param {object} computerChoice - The choice made by the computer.
 * @return {string} The result of the game: "It's a tie!", "You win!", or "Computer wins!".
 */
export const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice.id === computerChoice.id) {
    return "It's a tie!";
  } else if (
    (playerChoice.id === "rock" && computerChoice.id === "scissors") ||
    (playerChoice.id === "paper" && computerChoice.id === "rock") ||
    (playerChoice.id === "scissors" && computerChoice.id === "paper")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
};
