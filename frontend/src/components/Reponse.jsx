import React from 'react';

const Reponse = ({ question }) => {
  return (
    <div className='text-grey mt-2 inter-semi-bold'>
      <button className='flex flex-col inter-semi-bold px-24 py-3 text-xl rounded-2xl bg-light-grey hover:shadow-md'>
        {question}
      </button>
    </div>
  );
};

export default Reponse;
