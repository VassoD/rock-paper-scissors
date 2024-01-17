import React from "react";
import "./Winner.css";

export const Winner = ({ winner }) => {
  return (
    <div className="celebration">
      {winner === "You" ? (
        <>
          <p>Congratulations, {winner} are the winner!</p>
          <div className="winner-icon">&#127881;</div>
        </>
      ) : (
        <>
          <p>Oops, {winner} have won.. Try again!</p>
          <div className="loser-icon">&#128546;</div>
        </>
      )}
    </div>
  );
};
