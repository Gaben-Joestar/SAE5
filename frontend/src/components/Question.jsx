import React from 'react';

const Question = ({ numeroQuestion, question, nombreQuestion = 20 }) => {
  return (
    <div className="">
      <p className="flex flex-col items-center">
        Question {numeroQuestion} / {nombreQuestion}
      </p>
      <p className="flex flex-col items-center inter-semi-bold text-2xl">
        {question}
      </p>
    </div>
  );
};

export default Question;
