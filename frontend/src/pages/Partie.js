import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IconeJoueur from '../components/IconeJoueur';
import Question from '../components/Question';
import Reponse from '../components/Reponse';

const Partie = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-10">
        <div className="flex items-center justify-between mt-4 w-72">
          <IconeJoueur />
          <IconeJoueur />
          <IconeJoueur />
          <IconeJoueur />
        </div>
        <input
          type="range"
          className="mt-6 w-144 accent-black "
          disabled
          value="30"
          max="30"
        ></input>
        <div className="mt-4 text-white bg-grey p-6 w-144 rounded-xl">
          <Question
            question="Quel est le plus grand océan du monde ?"
            numeroQuestion="4"
          />
        </div>
        <div className="flex items-center justify-between mt-4 w-144">
          <Reponse question="reponse" />
          <Reponse question="reponse" />
        </div>
        <div className="flex items-center justify-between mt-0.5 w-144">
          <Reponse question="reponse" />
          <Reponse question="reponse" />
        </div>
      </div>
    </div>
  );
};

export default Partie;
