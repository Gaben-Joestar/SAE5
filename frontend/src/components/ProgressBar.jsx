import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className='progress-bar' style={{ '--progress': `${percentage}%` }}>
      <img
        src='./img/loupe-offre-gold.png'
        alt='Progression'
        className='w-1/6'
      />
    </div>
  );
};

export default ProgressBar;
