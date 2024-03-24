import React from "react";
import Option from "./Option";


function Question({ question }) {
  console.log(question);
  return (
    <div className="question-component" >
      <h1 className="question">{question?.question}</h1>
      <div className="option-section">
        {question.options.map((option) => (
          <Option option={option} key={option.id} />
        ))}
      </div>
    </div>
  );
}

export default Question;
