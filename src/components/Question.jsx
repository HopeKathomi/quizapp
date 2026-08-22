import AnswerOption from './AnswerOption';

function Question({question, options, answer}) {
    // console.log("Q: ", question);

  return (
    <>
        <form className='w-200 bg-gray-100 px-8 py-5 rounded-2xl'>
            <p>{question}</p>
            <AnswerOption 
            options = {options}
            answer = {answer}/>

        </form>
    </>
  )
}

export default Question