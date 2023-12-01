import React from 'react';

const SmallerCardTheme = ({ text = 'Le sport' }) => {
  return (
    <div className='bg-grey w-auto h-20 rounded-xl flex flex-row hover:cursor-pointer'>
      <div className='bg-white w-12 h-12 mt-4 ml-4 rounded-xl'></div>
      <p className='text-white ml-2 align-middle mt-6 text-lg'>{text}</p>
    </div>
  );
};

export default SmallerCardTheme;
