import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IconeJoueur from '../components/IconeJoueur';
import Question from '../components/Question';
import Reponse from '../components/Reponse';

const Partie = () => {
  const [dataIndex, setDataIndex] = useState(0);
  const [reponseCliquee, setReponseCliquee] = useState(null);
  const [listePlaceQuestions, setListePlaceQuestions] = useState({});

  const questionsJSON = {
    questions: [
      {
        question: 'que vaut 1+1',
        bonneReponse: '2',
        mauvaisesReponses: {
          mauvaiseReponse1: '3',
          mauvaiseReponse2: '4',
          mauvaiseReponse3: '5',
        },
      },
      {
        question: 'test',
        bonneReponse: 'bonne rep',
        mauvaisesReponses: {
          mauvaiseReponse1: 'mauvaise1',
          mauvaiseReponse2: 'mauvaise2',
          mauvaiseReponse3: 'mauvaise3',
        },
      },
    ],
  };

  const ajouterReponse = (reponseMel, bonneReponseIndex, dataIndex) => {
    const listeReponse = {
      idQuestion: dataIndex,
      reponse1: reponseMel[0],
      reponse2: reponseMel[1],
      reponse3: reponseMel[2],
      reponse4: reponseMel[3],
      indexBonneReponse: bonneReponseIndex,
    };
    setListePlaceQuestions([listePlaceQuestions, listeReponse]);
  };

  const reponses = Object.values({
    ...questionsJSON.questions[dataIndex].mauvaisesReponses,
    bonneReponse: questionsJSON.questions[dataIndex].bonneReponse,
  });

  const reponsesMelangees = reponses.sort(() => Math.random() - 0.5);
  const [reponseMel, setReponseMel] = useState(reponsesMelangees);

  const bonneReponseIndex = reponsesMelangees.findIndex(
    (reponse) => reponse === questionsJSON.questions[dataIndex].bonneReponse,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setReponseCliquee(null);
      setReponseMel(reponsesMelangees);

      //ajouterReponse(reponseMel, bonneReponseIndex, dataIndex);
      setDataIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= questionsJSON.questions.length
          ? prevIndex
          : nextIndex;
      });
    }, 10000); // 10 secondes

    return () => clearInterval(interval);
  }, [questionsJSON.questions.length, reponseCliquee, reponsesMelangees]);

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-10'>
        <div className='flex items-center justify-between mt-4 w-72'>
          <IconeJoueur />
          <IconeJoueur />
          <IconeJoueur />
          <IconeJoueur />
        </div>
        <input
          type='range'
          className='mt-6 w-144 accent-black '
          disabled
          value='30'
          max='30'
        ></input>
        <div className='mt-4 text-white bg-grey p-6 w-144 rounded-xl'>
          <Question
            question={questionsJSON.questions[dataIndex].question}
            numeroQuestion={dataIndex + 1}
            nombreQuestion={questionsJSON.questions.length}
          />
        </div>

        <div className='relative'>
          <div className='flex items-center justify-between mt-4 w-144 gap-5'>
            <Reponse
              reponse={reponseMel[0]}
              onClick={() => {
                setReponseCliquee(0);
              }}
              clickedButton={reponseCliquee}
              idButton={0}
            />
            <Reponse
              reponse={reponseMel[1]}
              onClick={() => {
                setReponseCliquee(1);
              }}
              clickedButton={reponseCliquee}
              idButton={1}
            />
          </div>
          <div className='flex items-center justify-between mt-0.5 w-144 gap-5'>
            <Reponse
              reponse={reponseMel[2]}
              onClick={() => {
                setReponseCliquee(2);
              }}
              clickedButton={reponseCliquee}
              idButton={2}
            />
            <Reponse
              reponse={reponseMel[3]}
              onClick={() => {
                setReponseCliquee(3);
              }}
              clickedButton={reponseCliquee}
              idButton={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partie;
