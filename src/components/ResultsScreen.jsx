// import App from'../App'
function ResultsScreen ({score, totalQuestions, setScore, setCurrentQuestion, setFinished, setSelect}){
    console.log("Qst: ", totalQuestions);

    function handleRestart(){
        setScore(0);
        setCurrentQuestion(0);
        setFinished(false);
        setSelect("")
    }

  return (
    <div className='flex flex-col h-screen items-center justify-center'>
        <h1>Quiz Complete!</h1>
      <p>Thanks for completing the quiz.</p>
      <div>{score}/{totalQuestions}</div>
      <button 
        onClick = {handleRestart}
        className={`bg-blue-400 px-4 py-1 rounded-md mt-6 `}> 
        Restart
      </button>
    </div>
    
    
  )
}

export default ResultsScreen