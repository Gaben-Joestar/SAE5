import React from 'react';
import InscriptionEnTete from './InscriptionEnTete';
import InscriptionPage1 from './InscriptionPage1';

const Inscription = () => {
  return (
    <div className="flex flex-col">
      <InscriptionEnTete />
      <InscriptionPage1 />
    </div>
  );
};

export default Inscription;
