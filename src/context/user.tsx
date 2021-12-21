import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { User } from '../interfaces/user.interface';
import api from '../services/api';

interface Credentials {
  username: string;
  password: string;
}

interface UserContextData {
  user: string | null;
  login(credentials: Credentials): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string | null>(null);

  const login = async (data: Credentials): Promise<void> => {
    try {
      const response: { token: string; user: User } = await api.post(
        '/auth/login',
        data
      );
      if (!response) {
        throw new Error();
      }
      localStorage.setItem('token', response.token);
      setUser(response.user.email);
      navigate('/journals');
    } catch (err) {
      toast.error('Wrong credentials!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
      }}
      {...props}
    />
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
