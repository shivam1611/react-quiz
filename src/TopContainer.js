import React from "react";
import ProgessBar from "./ProgessBar";
import Timer from "./Timer";

function TopContainer({
  questionLength,
  points,
  index,
  totalScore,
  selectedAnswer,
  dispatch,
  secondsRemaining
}) {
  return (
    <div className="progress-container">
      <ProgessBar maxValue={questionLength} value={index + Number(selectedAnswer !== null)} />
      <div className="detail-section">
        <div className="question-details details">
          Question :<strong>{index + 1}</strong> / {questionLength}{" "}
        </div>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
        <div className="score-details details">
          Score : <strong>{points}</strong> /{totalScore}{" "}
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
