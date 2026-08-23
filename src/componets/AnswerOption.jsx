import React from "react";

function AnswerOption({ answer, selected, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick} disabled={selected}>
        {answer}
      </button>
    </>
  );
}

export default AnswerOption;
