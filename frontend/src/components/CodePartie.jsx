import React from 'react';

const CodePartie = ({ code = 'AAAAB' }) => {
  const copier = () => {
    navigator.clipboard.writeText(code);
    alert('Vous avez copié le code : ' + code);
  };
  return (
    <div className='text-grey w-40 py-0.5 bg-light-grey rounded-2xl justify-center flex shadow-md tracking-verywide gap-3 items-center'>
      <p className='text-xl inter-semi-bold'>{code}</p>
      <img
        src='.././img/copy.png'
        alt='copy'
        className='h-4 hover:cursor-pointer'
        onClick={copier}
      ></img>
    </div>
  );
};

export default CodePartie;
