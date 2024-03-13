import React, { createContext, useState, useEffect } from 'react';
import * as authApi from '../../../api/auth-api';
import * as store from '../../../ultils/local-store';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const fetchMe = async () => {
    try {
      const res = await authApi.fetchMe();
      setAuthUser(res.data.user);
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  useEffect(() => {
    if (store.getToken()) {
      fetchMe();
    }
  }, []);

  const login = async (input) => {
    const respon = await authApi.userLogin(input);
    store.storeToken(respon.data.token);

    setAuthUser(respon.data.user);
  };

  const registerUser = async (input) => {
    if (input.mobile == '') {
      delete input.mobile;
    }
    const respon = await authApi.registerUser(input);
    store.storeToken(respon.data.token);

    setAuthUser(respon.data.user);
  };
  const registerAgent = async (input) => {
    const respon = await authApi.registerAgent(input);
    store.storeToken(respon.data.token);

    setAuthUser(respon.data.agent);
  };
  const logout = () => {
    store.clearToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        registerAgent,
        authUser,
        login,
        logout,
        fetchMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
