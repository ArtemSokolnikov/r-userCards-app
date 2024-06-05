import React, { createContext, useState, useContext } from 'react';
import { users } from '../data';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  return (
    <UserContext.Provider value={{ userList, setUserList }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
