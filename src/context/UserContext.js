import React, { createContext, useState } from "react";

export const UserContext = createContext();
const { Provider } = UserContext;

const initialState = null;
const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialState);

  const signCurrentUserIn = (user) => {
    setCurrentUser(user);
  };

  const signCurrentUserOut = () => setCurrentUser(initialState);

  return (
    <Provider value={{ currentUser, signCurrentUserIn, signCurrentUserOut }}>
      {children}
    </Provider>
  );
};

export default UserContextProvider;
