import AnswerOption from './AnswerOption';

function Question({question, options, answer, selected, setSelect, handleNextButton, setCorrectAnswer}) {
    // console.log("Q: ", question);

  return (
    <>
        <form className='w-200 bg-gray-100 px-8 py-5 rounded-2xl'>
            <p>{question}</p>
            <AnswerOption 
            options = {options}
            answer = {answer}
            selected = {selected}
            setSelect = {setSelect}
            handleNextButton = {handleNextButton}
            />
        </form>
    </>
  )
}

export default Question