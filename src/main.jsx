import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';

import AuthContextProvider from './features/auth/context/AuthContext';
import ChatContextProvider from './features/chat/context/ChatContext';
import { ReviewContextProvider } from './features/review/context/ReviewContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <ChatContextProvider>
      <ReviewContextProvider>
        <App />
      </ReviewContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
  // </React.StrictMode>
);
