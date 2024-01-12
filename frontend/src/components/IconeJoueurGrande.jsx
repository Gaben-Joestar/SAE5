import React from 'react';
import { cn } from '../lib/utils';

const IconeJoueurGrande = ({
  color,
  isReady = false,
  isLogged = false,
  nomJoueur = 'Joueur',
}) => {
  return (
    <div>
      <div
        className={cn(
          'relative w-36 h-36 bg-white rounded-full border-yellow border-[5px]',
          color && `border-${color}`,
          !isLogged && `border-light-grey`,
        )}
      >
        <div
          className={cn(
            'rounded-full absolute bottom-0 right-0 border-yellow h-10 w-10 translate border-[3px] bg-white flex justify-center items-center',
            color && `border-${color}`,
            !isLogged && `border-light-grey`,
          )}
        >
          {isReady ? (
            <img src='./img/check.png' alt='isReady' className='h-6 w-6' />
          ) : (
            isLogged && (
              <img src='./img/notReady.png' alt='isReady' className='h-6 w-6' />
            )
          )}
        </div>
      </div>
      <p
        className={cn(
          `text-${color} inter-extra-bold flex justify-center text-2xl`,
          !isLogged && 'text-light-grey',
        )}
      >
        {nomJoueur}
      </p>
      {nomJoueur !== '1' && isLogged && (
        <div className='flex justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='red'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            class='lucide lucide-x'
          >
            <path d='M18 6 6 18' />
            <path d='m6 6 12 12' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default IconeJoueurGrande;
