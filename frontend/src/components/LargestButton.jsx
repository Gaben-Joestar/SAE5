import React from 'react';

const LargestButton = ({ text }) => {
  return (
    <button className="px-8 py-1.5 bg-grey rounded-3xl text-white">
      {text}
    </button>
  );
};

export default LargestButton;
