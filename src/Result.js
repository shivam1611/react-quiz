import React from "react";
import Student from "./student.png";

function Result({ points, totalScore }) {
  const percentage = (points / totalScore) * 100;

  return (
    <div className="result-container">
      <img src={Student} alt="" className="start-img" />
      <p className="remark">
        {percentage < 70 && "You need a great practice!! 🎖️ "}
        {percentage > 70 && "You had a greate Score!! 🥇 "}
      </p>
      <p className="score-text">
        You gained <span className="special-text">{points} </span>marks out of{" "}
        <span className="special-text">{totalScore}</span>  marks.
      </p>
    </div>
  );
}

export default Result;
