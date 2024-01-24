const WebSocket = require('ws');

const clients = new Set();

const openWebsocket = async (code) => {
  const socket = new WebSocket.Server({ port: 8082 });
  socket.on('connection', function connection(ws) {
    console.log("Quelqu'un s'est connecté ");
    sendToEveryone('new_user');
    clients.add(ws);
    ws.addEventListener('message', (event) => {
      if (event.data === 'launch') {
        sendToEveryone('lancement');
      } else if (event.data === 'start_game') {
        envoyerQuestion();
      }
    });
    /*ws.onclose = (event) => {
      console.log("Quelqu'un s'est déco");
      sendToEveryone(ws + ' leave');
      ws.close;
      clients.delete(ws);
      if (clients.size === 0) {
        console.log('Tout le monde est parti');
        socket.close();
      }
    };*/
  });
};

function sendToEveryone(message) {
  const clientsArray = Array.from(clients);
  const connectedClients = clientsArray.map(
    (client) => client._socket.remoteAddress,
  );

  // Envoyer la liste des clients à tous les clients connectés
  clientsArray.forEach((client) => {
    client.send(message);
  });
}

function envoyerQuestion() {
  let index = 0; // Index initial
  let question = getQuestion(0);
  question.numeroQuestion = index + 1;
  console.log(question);
  sendToEveryone(JSON.stringify(question));
  const interval = setInterval(() => {
    index++;

    question = getQuestion(index);
    question.numeroQuestion = index + 1;

    sendToEveryone(JSON.stringify(question));
  }, 10000);
  setTimeout(() => {
    clearInterval(interval);
    sendToEveryone('fin');
  }, 50000);
}

function getQuestion(index) {
  const questionsJSON = {
    questions: [
      {
        question: 'Quel est le nom de la capitale de la France ?',
        bonneReponse: 'Paris',
        mauvaisesReponses: {
          mauvaiseReponse1: 'Londres',
          mauvaiseReponse2: 'Berlin',
          mauvaiseReponse3: 'Rome',
        },
      },
      {
        question: 'Qui a écrit la pièce de théâtre "Roméo et Juliette" ?',
        bonneReponse: 'Jane Austen',
        mauvaisesReponses: {
          mauvaiseReponse1: 'Victor Hugo',
          mauvaiseReponse2: 'Molière',
          mauvaiseReponse3: 'William Shakespeare',
        },
      },
      {
        question: 'Quel est le plus grand océan sur Terre ?',
        bonneReponse: 'Océan Atlantique',
        mauvaisesReponses: {
          mauvaiseReponse1: 'Océan Pacifique',
          mauvaiseReponse2: 'Océan Indien',
          mauvaiseReponse3: 'Océan Arctique',
        },
      },
      {
        question: 'Qui a peint la Joconde ?',
        bonneReponse: 'Leonard de Vinci',
        mauvaisesReponses: {
          mauvaiseReponse1: 'Vincent van Gogh',
          mauvaiseReponse2: 'Pablo Picasso',
          mauvaiseReponse3: 'Claude Monet',
        },
      },
      {
        question: 'Quelle est la capitale du Japon ?',
        bonneReponse: 'Seoul',
        mauvaisesReponses: {
          mauvaiseReponse1: 'Pékin',
          mauvaiseReponse2: 'Tokyo',
          mauvaiseReponse3: 'Bangkok',
        },
      },
    ],
  };
  return questionsJSON.questions[index];
}

module.exports = {
  openWebsocket,
};
