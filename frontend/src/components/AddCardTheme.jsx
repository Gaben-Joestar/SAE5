import React from 'react';

const AddCardTheme = ({ text = 'Le sport' }) => {
  return (
    <div className='w-52 h-24 rounded-xl flex flex-row border-4 border-light-grey  border-dashed hover:cursor-pointer'>
      <div className=' w-16 h-16 mt-3 ml-4 rounded-xl border-light-grey border-4'></div>
      <p className='text-light-grey ml-9 mt-2 text-6xl'>+</p>
    </div>
  );
};

export default AddCardTheme;
