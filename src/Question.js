import React from "react";
import Option from "./Option";


function Question({ question, answer, dispatch, selectedAnswer }) {
  const hasAnswered = selectedAnswer !== null;
  console.log(question);
  return (
    <div className="question-component" >
      <h1 className="question">{question?.question}</h1>
      <div className="option-section">
        <Option hasAnswered={hasAnswered} dispatch={dispatch} question={question} selectedAnswer = {selectedAnswer}/>
      </div>
      {
        selectedAnswer !== null && 
        <div className="button-section">
      <button className="btn-next btn" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
      </div>
      }
      
    </div>
  );
}

export default Question;
