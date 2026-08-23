import React, { useState } from "react";
// import "./App.css";
import Question from "./componets/Question";
import ResultScreen from "./componets/ResultsSreen";

const questions = [
  {
    id: 1,
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["Brazil", "Argentina", "France", "Germany"],
    correctAnswer: "Argentina",
  },
  {
    id: 2,
    question:
      "How many players are on the field for one soccer team during a match?",
    options: ["9", "10", "11", "12"],
    correctAnswer: "11",
  },
  {
    id: 3,
    question: "Which sport is played at Wimbledon?",
    options: ["Tennis", "Cricket", "Rugby", "Golf"],
    correctAnswer: "Tennis",
  },
  {
    id: 4,
    question:
      "How many points is a touchdown worth in American football before the extra point?",
    options: ["3", "6", "7", "10"],
    correctAnswer: "6",
  },
  {
    id: 5,
    question:
      "Which athlete is known as the fastest man in the world after setting the 100m world record?",
    options: ["Usain Bolt", "Tyson Gay", "Carl Lewis", "Yohan Blake"],
    correctAnswer: "Usain Bolt",
  },
];
function App() {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);

  const [questionNumber, setQuestionNumber] = useState(0);
  const question = questions[questionNumber];

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  function startQuiz(e) {
    e.preventDefault();
    if (name === "") {
      return;
    }
    setStarted(true);
  }

  function chooseAnswer(answer) {
    setSelectedAnswer(answer);
    if (answer === question.correctAnswer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (questionNumber === questions.length - 1) {
      setFinished(true);
    } else {
      setQuestionNumber(questionNumber + 1);
      setSelectedAnswer("");
    }
  }

  function restartQuiz() {
    setName("");
    setStarted(false);
    setQuestionNumber(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
  }

  //start screen
  if (!started) {
    return (
      <>
        <h1>My Quiz</h1>
        <form onSubmit={startQuiz}>
          <p>Enter your Name:</p>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button disabled={name === ""}>Start Quiz</button>
        </form>
      </>
    );
  }

  //results screen
  if (finished) {
    return <ResultScreen name={name} score={score} totalQuestions={questions.length} onRestart={restartQuiz} />;
  }

  //Quiz Screen
  return (
    <>
      <p>
        Qeustion {questionNumber + 1} of {questions.length}
      </p>
      <Question
        question={question}
        selectedAnswer={selectedAnswer}
        onAnswer={chooseAnswer}
      />

      {selectedAnswer && (
        <button onClick={nextQuestion}>
          {questionNumber === questions.length - 1
            ? "See Results"
            : "Next Question"}
        </button>
      )}
    </>
  );
}

export default App;
