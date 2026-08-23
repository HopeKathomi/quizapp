import React from 'react'
import  App from '../App'

function ResultsScreen (){

    function handleRestart(){
        
    }

  return (
    <div>ResultsScreen
        <h1>Quiz Complete!</h1>
      <p>Thanks for completing the quiz.</p>
      <button 
        onClick = {handleRestart}
        className={`bg-blue-400 px-4 py-1 rounded-md mt-6 `}> 
        Restart
      </button>
    </div>
    
    
  )
}

export default ResultsScreen