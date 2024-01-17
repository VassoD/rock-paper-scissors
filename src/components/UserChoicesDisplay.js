import React from "react";
import "./Choices.css";

const ChoicesDisplay = ({
  choices,
  playerChoice,
  handlePlayerChoice,
  disableChoices,
}) => {
  return (
    <div className="choices-container">
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handlePlayerChoice(choice)}
          className={`choice-btn ${playerChoice === choice ? "selected" : ""}`}
          disabled={disableChoices}
        >
          {choice.icon}
          <span>{choice.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ChoicesDisplay;
