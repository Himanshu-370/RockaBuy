import React, { useState } from "react";

const AppContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, userName, location) => {},
  logout: () => {},
  Username: "",
  location: "",
  payload: {
    weight: "",
    faringSiza: "",
    orbit: "",
  },
  time: {
    year: "",
    quarter: "",
  },
});

export const AppContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const [userName, setUserName] = useState('');
  const [loc, setLoc] = useState('');
  const userIsLoggedIn = !!token;

  function loginHandeler(token, userName, location) {
    localStorage.setItem('token', token );
    setUserName(userName);
    setLoc(location)
    setToken(token);
  }

  function logoutHandeler() {
    localStorage.clear()
    setToken(null);
  }

  const contextvalue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandeler,
    logout: logoutHandeler,
    Username: userName,
    location: loc,
    payload: {
      weight: "",
      faringSiza: "",
      orbit: "",
    },
    time: {
      year: "",
      quarter: "",
    },
  }

  return (
    <AppContext.Provider value={contextvalue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AuthContext;
