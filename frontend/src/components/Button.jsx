import React from 'react';
import { cn } from '../lib/utils';

const Button = ({ text, isActive = true, className }) => {
  return (
    <button
      className={cn(
        `px-5 py-1.5 ${
          isActive ? 'bg-grey' : 'bg-light-grey'
        } rounded-3xl text-white hover:shadow-md`,
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
