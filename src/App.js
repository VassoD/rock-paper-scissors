import React, { useEffect, useState } from "react";
import "./App.css";
import { getRandomChoice } from "./utils/randomChoice";
import { determineWinner } from "./utils/determineWinner";
import { choices } from "./utils/choices";
import { Winner } from "./components/Winner";
import ChoicesDisplay from "./components/UserChoicesDisplay";
import { ComputerChoicesDisplay } from "./components/ComputerChoiceDisplay";

const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [disableChoices, setDisableChoices] = useState(false);
  const [showWinner, setShowWinner] = useState(false);

  useEffect(() => {
    if (playerScore === 5 || computerScore === 5) {
      // Disable choices when someone reaches a score of 5
      setDisableChoices(true);

      // Show Winner
      setShowWinner(true);
    }
  }, [playerScore, computerScore]);

  const handlePlayerChoice = (choice) => {
    if (!disableChoices) {
      const computer = getRandomChoice();
      const roundResult = determineWinner(choice, computer);

      setPlayerChoice(choice);
      setComputerChoice(computer);
      setResult(roundResult);

      if (roundResult === "You win!") {
        setPlayerScore((prevScore) => prevScore + 1);
      } else if (roundResult === "Computer wins!") {
        setComputerScore((prevScore) => prevScore + 1);
      }
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setShowWinner(false);
    setShowWinner(false);
    // Enable choices
    setDisableChoices(false);
  };

  return (
    <div className={`app ${showWinner ? "celebrate" : ""}`}>
      <h1>Rock, Paper, Scissors</h1>
      <h4>You vs Computer</h4>
      <p>First to score 5 wins! </p>
      <div className="scoreboard">
        <div className="player-score">
          <p>Your Score: {playerScore}</p>
        </div>
        <div className="computer-score">
          <p>Computer Score: {computerScore}</p>
        </div>
      </div>
      <div className="main-container">
        <div className="user-container">
          <h4>Your choice </h4>
          <ChoicesDisplay
            choices={choices}
            playerChoice={playerChoice}
            handlePlayerChoice={handlePlayerChoice}
            disableChoices={disableChoices}
          />
        </div>
        <div className="computer-container">
          <h4>Computer's choice</h4>
          <ComputerChoicesDisplay
            choices={choices}
            computerChoice={computerChoice}
          />
        </div>
      </div>
      <h2>{result}</h2>
      {showWinner && <Winner winner={playerScore === 5 ? "You" : "Computer"} />}
      {showWinner && (
        <div className="result-container">
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
