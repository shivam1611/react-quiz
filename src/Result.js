import React from "react";
import Student from "./student.png";

function Result({ points, totalScore, highScore , dispatch}) {
  const percentage = (points / totalScore) * 100;

  return (
    <div className="result-container">
      <img src={Student} alt="" className="start-img" />
      <p className="remark">
        { percentage > 30 && "You need a great practice!! 🎖️ "}
        {percentage > 70 && "You had a greate Score!! 🥇 "}
        {percentage === 0  && "You scored very poor🫤"}
      </p>
      <p className="score-text">
        You gained <span className="special-text">{points} </span>marks out of{" "}
        <span className="special-text">{totalScore}</span>  marks.
      </p>
      <div className="div">
      <p className="percentage score-text">Percentage : {Math.ceil(percentage)}%</p>
      <p className="percentage score-text">High Score : {highScore}</p>
      </div>
      <div className="restart-btn-section">
      <button className="btn start-btn restart-btn" onClick= {()=> {dispatch({type:"restart"})}}>Restart Quiz</button>

      </div>
    </div>
  );
}

export default Result;
