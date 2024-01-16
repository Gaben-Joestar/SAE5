import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import IconeJoueur from '../components/IconeJoueur';
import Question from '../components/Question';
import Reponse from '../components/Reponse';
import { useWs } from '../hooks/useWs';
import { useNavigate, useParams } from 'react-router-dom';

const Partie = () => {
  const [reponseCliquee, setReponseCliquee] = useState(null);
  const [isQuestion, setIsQuestion] = useState(false);
  const navigate = useNavigate();
  const { codePartie } = useParams();
  const [questionsJSON, setQuestionsJSON] = useState(null);
  const [ready, val, send] = useWs('ws://localhost:8082');

  const token = 5;

  useEffect(() => {
    if (val !== null) {
      if (val === 'fin') {
        navigate(`/resultat/${codePartie}`);
      } else {
        try {
          setQuestionsJSON(JSON.parse(val));
        } catch (error) {}
        setIsQuestion(true);
      }
    }
  }, [val]);

  useEffect(() => {
    if (ready && questionsJSON === null) {
      send('start_game');
    }
  }, [ready]);

  /*const reponses = Object.values({
    ...questionsJSON.questions[dataIndex].mauvaisesReponses,
    bonneReponse: questionsJSON.questions[dataIndex].bonneReponse,
  });*/

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center mt-10'>
        <div className='flex items-center justify-between mt-4 w-72'>
          <IconeJoueur className='border-red' />
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
            question={isQuestion ? questionsJSON?.question : 'pas de question'}
            numeroQuestion={isQuestion ? questionsJSON?.numeroQuestion : 'none'}
            nombreQuestion={2}
          />
        </div>

        <div className='relative'>
          <div className='flex items-center justify-between mt-4 w-144 gap-5'>
            <Reponse
              reponse={
                isQuestion ? questionsJSON?.bonneReponse : 'pas de reponse'
              }
              onClick={() => {
                setReponseCliquee(0);
              }}
              clickedButton={reponseCliquee}
              idButton={0}
            />
            <Reponse
              reponse={
                isQuestion
                  ? questionsJSON?.mauvaisesReponses?.mauvaiseReponse1
                  : 'pas de reponse'
              }
              onClick={() => {
                setReponseCliquee(1);
              }}
              clickedButton={reponseCliquee}
              idButton={1}
            />
          </div>
          <div className='flex items-center justify-between mt-0.5 w-144 gap-5'>
            <Reponse
              reponse={
                isQuestion
                  ? questionsJSON?.mauvaisesReponses?.mauvaiseReponse2
                  : 'pas de reponse'
              }
              onClick={() => {
                setReponseCliquee(2);
              }}
              clickedButton={reponseCliquee}
              idButton={2}
            />
            <Reponse
              reponse={
                isQuestion
                  ? questionsJSON?.mauvaisesReponses?.mauvaiseReponse3
                  : 'pas de reponse'
              }
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
