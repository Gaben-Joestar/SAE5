import React from 'react';

const ChoixTheme = ({ text, bg_color }) => {
  var classNameDiv =
    bg_color === 'cyan'
      ? 'w-144 h-36 bg-cyan text-white rounded-2xl text-5xl font-bold flex flex-row hover:cursor-pointer'
      : 'w-144 h-36 bg-grey-brown text-white rounded-2xl text-5xl font-bold flex flex-row hover:cursor-pointer';

  return (
    <div className={classNameDiv}>
      <img src='./img/loupe.png' alt='loupe' className='w-32 ml-5 mr-7'></img>
      <p className='mt-5'>{text}</p>
    </div>
  );
};

export default ChoixTheme;
