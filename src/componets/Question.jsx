import React from "react";
import AnswerOption from "./AnswerOption";

function Question({ question, selectedAnswer, onAnswer }) {
 

  return (
    <>
      <h2>{question.question}</h2>
      {question.options.map((option) => (
        <AnswerOption
          key={option}
          answer={option}
          selected={selectedAnswer !== ""}
          onClick={() => onAnswer(option)}
        />
      ))}
      {selectedAnswer &&
      (<p>
        {selectedAnswer ===question.correctAnswer? "Correct!"
        :`Incorrect. The correct answer is ${question.correctAnswer}`}
      </p>
    )}
    </>
  );
}
export default Question;
