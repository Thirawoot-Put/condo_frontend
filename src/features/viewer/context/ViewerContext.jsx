import { useEffect } from 'react';
import { createContext } from 'react';
import * as chatApi from '../../../api/chat-api';
import { useState } from 'react';
import socket from '../../../config/socket';
import useAuth from '../../auth/hook/useAuth';
// import { useNavigate } from 'react-router-dom';

export const ViewerContext = createContext();

export default function ViewerContextProvider({ children }) {
  return <ViewerContext.Provider value={{}}>{children}</ViewerContext.Provider>;
}
