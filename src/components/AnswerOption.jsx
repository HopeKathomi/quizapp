import { useState } from 'react'
import './answeroption.css'
 function AnswerOption({options, answer}) {
    
  const [selected, setSelect] = useState("");

  function handleClick(e){
    setSelect(e.target.value);   
  }

  function checkAnswer(option){ 
    return answer === option ;
  }
  // console.log("a: ", checkAnswer(option));

  return (
    <div>
      {options.map(option =>(
        <div key = {option}>
          <div 
            onClick = {handleClick} 
            className = {`px-2 rounded hover:bg-blue-100 ${selected === option ? checkAnswer(option) ? "bg-green-200 border border-green-300" : "bg-red-200 border border-red-300" : ""}`} >
            <label >
              <input 
              type="radio" 
              name = "answer" 
              value = {option} 
              className = 'mr-2'/>
              {option}
            </label>
          </div>
          {selected === option && !checkAnswer(option) && (
            <div className="bg-gray-200 px-2 font-medium">
              Incorrect - the right answer is: <span className = 'italic '>{answer}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default AnswerOption