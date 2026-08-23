function ResultScreen ({name,score,totalQuestions,onRestart}){
return(
    <>
    <h1>Quiz Finished!</h1>
    <p>Nice job,{name}</p>
    <p>Your Score:{score}/{totalQuestions}</p>
    <button onClick={onRestart}>Restart</button>
    </>
);
}
export default ResultScreen;