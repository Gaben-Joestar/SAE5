const WebSocket = require('ws');

const clients = new Set();

const openWebsocket = async (code) => {
  const socket = new WebSocket.Server({ port: 8082 });
  socket.on('connection', function connection(ws) {
    console.log("Quelqu'un s'est connecté ");
    sendToEveryone();
    clients.add(ws);
    ws.send(Math.floor(Math.random() * 15));
  });
};

function sendToEveryone() {
  const clientsArray = Array.from(clients);
  const connectedClients = clientsArray.map(
    (client) => client._socket.remoteAddress,
  );

  // Envoyer la liste des clients à tous les clients connectés
  clientsArray.forEach((client) => {
    client.send('new user');
  });
}

module.exports = {
  openWebsocket,
};
