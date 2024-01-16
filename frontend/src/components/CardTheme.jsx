import React from 'react';

const CardTheme = ({ text = 'Le sport' }) => {
  return (
    <div className='bg-grey w-52 h-24 rounded-xl flex flex-row hover:cursor-pointer'>
      <div className='bg-white w-16 h-16 mt-4 ml-4 rounded-xl'></div>
      <p className='text-white ml-5 align-middle mt-8 text-lg'>{text}</p>
    </div>
  );
};

export default CardTheme;
