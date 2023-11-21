import React from 'react';

const Reponse = ({ question }) => {
  return (
    <div className="text-grey bg-light-grey p-2 rounded-2xl mt-2 inter-semi-bold">
      <button className="flex flex-col inter-semi-bold px-22 py-1 text-xl">
        {question}
      </button>
    </div>
  );
};

export default Reponse;
