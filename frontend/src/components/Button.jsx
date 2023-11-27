import React from 'react';

const Button = ({ text }) => {
  return (
    <button className='px-5 py-1.5 bg-grey rounded-3xl text-white hover:shadow-md'>
      {text}
    </button>
  );
};

export default Button;
