// import App from'../App'
function ResultsScreen ({score, totalQuestions, setScore, setCurrentQuestion, setFinished, setSelect, name}){
    console.log("Qst: ", totalQuestions);

    function handleRestart(){
        setScore(0);
        setCurrentQuestion(0);
        setFinished(false);
        setSelect("")
    }

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-blue-200'>
        <div className="flex flex-col items-center justify-center bg-blue-100 py-8 px-9 rounded-2xl" >
            <h1>Quiz Complete!</h1>
            <div>Nice job, <span className="font-medium italic">{name}</span> - you scored <span className="font-medium">{score}/{totalQuestions}!</span></div>
            <button 
                onClick = {handleRestart}
                className={`bg-blue-400 px-4 py-1 rounded-md mt-6 `}> 
                Restart
            </button>
        </div>
    </div>
    
    
  )
}

export default ResultsScreen