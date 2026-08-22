import { useState } from 'react'
import './answeroption.css'
 function AnswerOption({options, answer}) {
    
  const [selected, setSelect] = useState("");
  // const [isCorrect, setIsCorrect] = useState("false");
  console.log("a: ", answer);

  function handleClick(e){
    setSelect(e.target.value);
    // const selectedAnswer = e.target.value;
     
  }

  function checkAnswer(){ 
    return answer === selected ;
  }
  console.log("a: ", checkAnswer());

  return (
    <div>
      {options.map(option =>(
        <div 
        onClick = {handleClick} 
        className = {`px-2 rounded hover:bg-blue-100 ${selected === option ? checkAnswer() ? "bg-green-200 border border-green-300" : "bg-red-200 border border-red-300" : ""}`} >
          <label >
            <input type="radio" name = "answer" value = {option} className = 'mr-2'/>
            {option}
          </label>
        </div>
      ))}
    </div>
  )
}

export default AnswerOption