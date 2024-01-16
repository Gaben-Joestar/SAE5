import React from 'react';
import { cn } from '../lib/utils';

const IconeJoueur = (className) => {
  return (
    <div
      className={cn(
        'rounded-full bg-light-grey w-14 h-14 text-light-grey',
        className,
      )}
    ></div>
  );
};

export default IconeJoueur;
