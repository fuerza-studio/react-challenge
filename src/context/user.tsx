import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { User } from '../interfaces/user.interface';
import api from '../services/api';

interface Credentials {
  username: string;
  password: string;
}
interface UserContextData {
  getUserData: () => any;
  login(credentials: Credentials): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = (props) => {
  const navigate = useNavigate();

  const login = async (data: Credentials): Promise<void> => {
    try {
      const response: { token: string; user: User } = await api.post(
        '/auth/login',
        data
      );
      if (!response) {
        throw new Error();
      }

      const { password: _password, ...userData } = response.user;
      localStorage.setItem(
        'userData',
        JSON.stringify({ token: response.token, ...userData })
      );
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

  const getUserData = () => {
    const userData = localStorage.getItem('userData');
    return userData && JSON.parse(userData);
  };

  return (
    <UserContext.Provider
      value={{
        getUserData,
        login,
      }}
      {...props}
    />
  );
};

const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
