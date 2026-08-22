import { useState } from 'react'
import './answeroption.css'
 function AnswerOption({options}) {
    
    const [select, setSelect] = useState("");

    function handleClick(e){
        setSelect(e.target.value);
        console.log(e.target.value,"Clicked");
    }

    function checkAnswer(){
        
    }
  return (
    <div>
        {options.map(option =>(
            <div onClick = {handleClick} className = "hover:bg-blue-100" >
                <label>
                    <input type="checkbox" name = {option} value = {option} />
                    {option}
                </label>
            </div>
        ))}
    </div>
  )
}

export default AnswerOption