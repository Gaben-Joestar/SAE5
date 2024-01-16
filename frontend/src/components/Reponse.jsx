import React from 'react';

const Reponse = ({ reponse, onClick, idButton, clickedButton }) => {
  return (
    <div className='text-grey mt-2 inter-semi-bold relative w-full'>
      <button
        className={`inter-semi-bold w-full py-3 text-xl rounded-3xl bg-light-grey hover:shadow-md ${
          idButton === clickedButton && 'border-green border-2'
        }`}
        onClick={onClick}
      >
        {reponse}
      </button>
    </div>
  );
};

export default Reponse;
