import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useWs } from '../hooks/useWs';

const { default: Button } = require('../components/Button');
const { default: CodePartie } = require('../components/CodePartie');
const {
  default: IconeJoueurGrande,
} = require('../components/IconeJoueurGrande');

const Lobby = () => {
  const { codePartie } = useParams();
  const [infosServer, setInfosServer] = useState('null');
  const [ready, val, send] = useWs('ws://localhost:8082');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/partie/participants/${codePartie}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        },
      );

      if (response.ok) {
        const data = await response.json();
        setInfosServer(data.infoPartie);
        // Mettez à jour l'interface utilisateur ou effectuez d'autres actions nécessaires.
      } else {
        const errorData = await response.json();
        console.error("Erreur lors de la recherche d'information", errorData);
        // Gérez l'erreur, par exemple, affichez un message d'erreur à l'utilisateur.
      }
    } catch (error) {
      console.error('Erreur lors de la requête :', error);
      // Gérez les erreurs lors de l'envoi de la requête.
    }
  };

  // Utilisez un useEffect pour déclencher fetchData au montage initial du composant
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (val !== null) {
      fetchData();
      if (val === 'lancement') {
        navigate(`/partie/${codePartie}`);
      }
      console.log(val);
    }
  }, [val]);

  return (
    <div>
      <Header />
      <div className='flex flex-col items-center relative'>
        <h1 className='inter-extra-bold text-grey leading-8'>
          PREPARATION DE LA PARTIE
        </h1>
        <p>Rejoignez la partie en rentrant le code</p>
        <div className='mt-5'>
          <CodePartie code={codePartie} />
        </div>
        <div className='flex gap-8 mt-8'>
          <IconeJoueurGrande
            color='red'
            isReady={true}
            isLogged={true}
            nomJoueur={infosServer.participant1}
          />
          <IconeJoueurGrande
            color='yellow'
            isLogged={!(infosServer.participant2 === null)}
            isReady={false}
            nomJoueur={
              infosServer.participant2 === null
                ? 'Joueur'
                : infosServer.participant2
            }
          />
          <IconeJoueurGrande
            color='purple'
            isLogged={!(infosServer.participant3 === null)}
            isReady={false}
            nomJoueur={
              infosServer.participant3 === null
                ? 'Joueur'
                : infosServer.participant3
            }
          />
          <div className='relative'>
            <IconeJoueurGrande
              color='green'
              isLogged={!(infosServer.participant4 === null)}
              isReady={false}
              nomJoueur={
                infosServer.participant4 === null
                  ? 'Joueur'
                  : infosServer.participant4
              }
            />
            <div
              onClick={() => {
                send('launch');
              }}
            >
              <Button
                text={`Commencer`}
                className={
                  'px-12 text-xl mt-10 absolute right-0 bottom-0 translate-y-28'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
