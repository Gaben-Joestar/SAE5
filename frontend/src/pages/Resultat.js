import React from 'react';
import Header from '../components/Header';
import CarteResultat from '../components/CarteResultat';
import Button from '../components/Button';

const Resultat = () => {
  const joueursJSON = {
    joueurs: [
      {
        nom: 'Joueur 1',
        couleur: 'red',
        score: 15,
      },
      {
        nom: 'Joueur 2',
        couleur: 'purple',
        score: 8,
      },
      {
        nom: 'Joueur 3',
        couleur: 'green',
        score: 18,
      },
      {
        nom: 'Joueur 4',
        couleur: 'yellow',
        score: 5,
      },
    ],
  };
  const joueursTries = joueursJSON.joueurs.sort((a, b) => b.score - a.score);

  console.log(joueursTries[0]);
  return (
    <div>
      <Header />
      <div className='flex justify-center'>
        <h1 className='text-grey inter-extra-bold text-4xl mt-8'>RESULTATS</h1>
      </div>
      <div className='flex flex-col items-center mt-10 gap-y-5'>
        <CarteResultat
          scoreJoueur={joueursTries[0].score}
          color={joueursTries[0].couleur}
          nomJoueur={joueursTries[0].nom}
        />
        <div className='flex gap-10'>
          {joueursTries.slice(1).map((unJoueur, classement) => {
            return (
              <CarteResultat
                scoreJoueur={unJoueur.score}
                color={unJoueur.couleur}
                nomJoueur={unJoueur.nom}
                placeJoueur={classement + 2}
              />
            );
          })}
        </div>
        <Button text={'Rejouer'} className={'px-14 text-xl mt-5'} />
      </div>
    </div>
  );
};

export default Resultat;
