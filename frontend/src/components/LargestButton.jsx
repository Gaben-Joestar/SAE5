import React from 'react';

const LargestButton = ({ text, isActive = true }) => {
  var classNameButton = `px-8 py-1.5 ${
    isActive ? 'bg-grey' : 'bg-light-grey'
  } rounded-3xl text-white hover:shadow-md`;
  return <button className={classNameButton}>{text}</button>;
};

export default LargestButton;
