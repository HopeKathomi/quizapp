import AnswerOption from './AnswerOption';

function Question({question, options}) {
    // console.log("Q: ", question);

  return (
    <>
        <form>
            <p>{question}</p>
            <AnswerOption options = {options}/>

        </form>
    </>
  )
}

export default Question