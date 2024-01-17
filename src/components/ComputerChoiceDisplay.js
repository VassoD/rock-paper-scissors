import React from "react";

export const ComputerChoicesDisplay = ({ choices, computerChoice }) => {
  return (
    <div className="choices-container">
      {choices.map((choice) => (
        <button
          key={choice.id}
          // disabled button so the computer's choices are not clickable
          disabled
          className={`computer-choice-btn ${
            computerChoice === choice ? "selected" : ""
          }`}
        >
          {choice.icon}
          <span>{choice.label}</span>
        </button>
      ))}
    </div>
  );
};
