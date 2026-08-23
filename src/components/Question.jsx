import AnswerOption from './AnswerOption';

function Question({question, options, answer, selected, setSelect, handleNextButton, setCorrectAnswer}) {
    // console.log("Q: ", question);

  return (
    <>
        <form className='max-w-200 min-w-150 bg-gray-100 px-8 py-5 rounded-2xl mb-20'>
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