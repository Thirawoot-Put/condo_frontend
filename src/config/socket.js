import io from 'socket.io-client';

const socket = io.connect(import.meta.env.VITE_API_URL, { autoConnect: false });
// socket.connect();

// const ENDPOINT = 'localhost:8080';

// const socket = io(ENDPOINT);

export default socket;
