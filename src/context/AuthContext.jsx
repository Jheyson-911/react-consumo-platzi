import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { getToken, tokenExist } from '../helpers/localStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const profile = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/auth/profile`,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err.response.statusText);
    }
  };

  useEffect(() => {
    if (tokenExist) {
      profile();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, profile }}>
      {children}
    </AuthContext.Provider>
  );
};
