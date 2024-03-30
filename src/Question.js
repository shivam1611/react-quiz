import React from "react";
import Option from "./Option";


function Question({ question, answer, dispatch, selectedAnswer, index, questionLength }) {
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
          {
           index < questionLength - 1  &&
              <button className="btn-next btn" onClick={()=>dispatch({type:"nextQuestion"})}>Next</button>
          }
          {
            index === questionLength - 1 && <button className="btn-next btn" onClick={()=>dispatch({type:"finished"})}>Finish</button>
          }
      </div>
      }
      
    </div>
  );
}

export default Question;
