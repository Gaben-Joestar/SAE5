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
  }, 20000);
}

function getQuestion(index) {
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
  return questionsJSON.questions[index];
}

module.exports = {
  openWebsocket,
};
