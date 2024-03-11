import io from 'socket.io-client';

const socket = io.connect(import.meta.env.VITE_API_URL, { autoConnect: false });

export default socket;
