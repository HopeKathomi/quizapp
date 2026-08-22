import AnswerOption from './AnswerOption';

function Question({question, options, answer}) {
    // console.log("Q: ", question);

  return (
    <>
        <form>
            <p>{question}</p>
            <AnswerOption 
            options = {options}
            answer = {answer}/>

        </form>
    </>
  )
}

export default Question