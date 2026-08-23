import { useState } from 'react'
import Question from './components/Question'
import ResultsScreen from './components/ResultsScreen';
import './App.css'
import HomePage from './components/HomePage';
// import './App.css'

function App() {
  const questions = [
    {
      id: 1,
      question: "Which country won the 2022 FIFA World Cup?",
      options: ["Brazil", "Argentina", "France", "Germany"],
      correctAnswer: "Argentina",
    },
    {
      id: 2,
      question: "How many players are on the field for one soccer team during a match?",
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
      question: "How many points is a touchdown worth in American football before the extra point?",
      options: ["3", "6", "7", "10"],
      correctAnswer: "6",
    },
    {
      id: 5,
      question: "Which athlete is known as the fastest man in the world after setting the 100m world record?",
      options: ["Usain Bolt", "Tyson Gay", "Carl Lewis", "Yohan Blake"],
      correctAnswer: "Usain Bolt",
    },
  ];
  const [start, setStart] = useState(true);
  const [name, setName] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelect] = useState("");
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  if(start){
    return <HomePage setStart={setStart} name={name} setName={setName}/>
  }

  function handleClick() {
    getScore();
    if(currentQuestion < questions.length-1){
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setFinished(true);
    }
  }

  function getScore(){
    let answer = questions[currentQuestion].correctAnswer;

    if(answer === selected){
      setScore(score =>score + 1);
    }
  }

  if(finished){
    return <ResultsScreen 
      score = {score} 
      totalQuestions = {questions.length}
      setScore = {setScore}
      setCurrentQuestion = {setCurrentQuestion}
      setFinished = {setFinished}
      setSelect = {setSelect}
      name= {name}
      />;
  }

  return (
    <div className='flex flex-col h-screen items-center justify-center gap-2'>
      <div className='font-semibold py-10 text-2xl'>Please answer the following questions</div>
      <div className='w-full max-w-md'>
        <div className='flex justify-between mb-2 text-sm'>
          <span>Progress </span>
          <span>Question {currentQuestion+1} of {questions.length}</span>
        </div>
        <div>
          <div className='bg-blue-400 h-2 rounded-full transition-all duration-300'
            style={{width:`${((currentQuestion + 1)/questions.length) * 100}%`}}></div>
        </div>
      </div>
      <Question
        key = {questions[currentQuestion].id}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        answer={questions[currentQuestion].correctAnswer}
        selected = {selected}
        setSelect = {setSelect}
        handleNextButton = {handleClick}
      />    
    </div>
  )
}

export default App