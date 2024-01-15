import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function openWebsocket(code) {
  const socket = new WebSocket(`ws://localhost:8082`);
  socket.addEventListener('open', (event) => {
    console.log('Connection au websocket');
    socket.send('Hello Server!');
  });
  socket.addEventListener('message', function (event) {
    console.log(event.data);
  });
  socket.onclose = function (event) {
    console.log('La connection a bien été fermée');
    socket.close();
  };
  return socket;
}
