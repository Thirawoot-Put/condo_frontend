import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './features/auth/context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import ChatContextProvider from './features/chat/context/ChatContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);
