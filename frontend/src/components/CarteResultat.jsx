import React from 'react';
import BarScore from './BarScore';

const CarteResultat = ({
  color = 'yellow',
  scoreMax = 20,
  scoreJoueur = 15,
  nomJoueur = 'Joueur 1',
  placeJoueur = 1,
}) => {
  return (
    <div
      className={`relative bg-white rounded-2xl border-8 border-${color} h-32 w-68 flex items-center`}
    >
      <div className='rounded-full h-20 w-20 bg-light-grey ml-4'></div>
      <div className='flex flex-col items-center ml-4'>
        <p className={`text-3xl text-${color} inter-extra-bold`}>{nomJoueur}</p>
        <BarScore scoreMax={scoreMax} scoreJoueur={scoreJoueur} color={color} />
        <p className='self-end inter-extra-bold'>{`${scoreJoueur}/${scoreMax}`}</p>
      </div>
      <div className='absolute top-0 left-0 -translate-x-5 -translate-y-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='45'
          height='45'
          viewBox='0 0 24 24'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
          class={`lucide lucide-star fill-${color} stroke-${color} -translate-x-1 -translate-y-1`}
        >
          <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
        </svg>
        <p className='absolute top-0 left-0 translate-x-3 translate-y-1.5 text-white inter-semi-bold text-xl'>
          {placeJoueur}
        </p>
      </div>
    </div>
  );
};
export default CarteResultat;
