import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function useChat() {
  return useContext(ChatContext);
}
