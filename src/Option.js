import React from "react";

function Option({ dispatch, question, selectedAnswer }) {
  const hasAnswered = selectedAnswer !== null
  return (
    <div className="  ">
      {question?.options?.map((option, index) => (
        <button
          className={`${hasAnswered ? index === selectedAnswer ? "left-shifted" : "" : ""} ${hasAnswered ?  index === question.correctOption ? "correct-answer-styling" : "wrong-answer-styling" : "" } option-component`}
          dispatch={dispatch}
          disabled={selectedAnswer !== null}
          option={option}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
