import React from "react";
import Option from "./Option";


function Question({ question, dispatch, selectedAnswer }) {
  console.log(question);
  return (
    <div className="question-component" >
      <h1 className="question">{question?.question}</h1>
      <div className="option-section">
        <Option dispatch={dispatch} question={question} selectedAnswer = {selectedAnswer}/>
      </div>
    </div>
  );
}

export default Question;
