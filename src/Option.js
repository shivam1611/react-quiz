import React from "react";

function Option({ dispatch, question, selectedAnswer, hasAnswered }) {
  
  return (
    <div className="  ">
      {question?.options?.map((option, index) => (
        <button
          className={`${
            hasAnswered ? (index === selectedAnswer ? "left-shifted" : "") : ""
          } ${
            hasAnswered
              ? index === question.correctOption
                ? "correct-answer-styling"
                : "wrong-answer-styling"
              : ""
          } option-component`}
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
