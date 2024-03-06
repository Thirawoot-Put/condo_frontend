import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../features/chat_test/components/InfoBar';
import ChatInput from '../features/chat_test/components/ChatInput';
import Messages from '../features/chat_test/components/Messages';
import TextContainer from '../features/chat_test/components/TextContainer';

let socket;

export default function ChatTestPage() {
  const location = useLocation();

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:8080';
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, () => {});

    socket.on('roomData', ({ room, users }, callback) => {
      setUsers(users);
    });

    return () => {
      socket.emit('disconnect');

      // มาทำต่อ
      socket.on('roomData', ({ room, users }, callback) => {
        setUsers(users);
      });

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('');
      });
    }
  };

  console.log(message, messages);

  return (
    <div className=''>
      <div className=''>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <TextContainer users={users.filter((user) => user.room === room)} />
    </div>
  );
}
