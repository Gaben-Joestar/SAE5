import React from 'react';

const BarScore = ({ scoreMax, scoreJoueur, color }) => {
  const res = Math.floor((scoreJoueur / scoreMax) * 126);
  console.log(res);
  return (
    <div className={`relative bg-light-grey w-full h-2 rounded-xl`}>
      <div className={`bg-${color} h-2 w-[${res}px] rounded-xl`}></div>
    </div>
  );
};

export default BarScore;
