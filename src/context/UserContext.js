import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export const userDefault = {
  id: "",
  name: "",
  email: "",
  location: "",
  company: "",
  studentCode: "",
  listEvent: [],
  listYourEvent: [], // Created by you
};

const userFromLs = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : userDefault;
};

function UserProvider({ children }) {
  const [user, setUser] = useState(userFromLs);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserProvider;
