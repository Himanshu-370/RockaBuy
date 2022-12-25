import React, { useState } from "react";

const AppContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  Username: "",
  setusername: (userName)=>{},   //username register sign up and login
  location: "",
  setlocation: (location) =>{},
  payload: {
    weight: "",
    faringSize: "",
    orbit: "",
  },
  setpayload: (payload) => {},
  time: {
    year: "",
    quarter: "",
  },
  settime: (time)=>{}
});

export const AppContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");

  const [token, setToken] = useState(initialToken);
  const [userName, setUserName] = useState('');
  const [loc, setLoc] = useState('');
  const [payload, setPayload] = useState({});
  const [time, setTime] = useState({});
  const userIsLoggedIn = !!token;

  function loginHandeler(token) {
    localStorage.setItem('token', token);
    setToken(token);
  }

  function logoutHandeler() {
    localStorage.clear()
    setToken(null);
  }

  function setusername(username){
    setUserName(username);
  }

  function setlocation(location){
    setLoc(location);
  }

  function setpayload(payload){
    setPayload(payload);
  }

  function settime(time){
    setTime(time)
  }

  const contextvalue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandeler,
    logout: logoutHandeler,
    Username: userName,
    setusername: setusername,
    location: loc,
    setlocation: setlocation,
    payload: payload,
    setpayload: setpayload,
    time: time,
    settime: settime
  }

  return (
    <AppContext.Provider value={contextvalue}>
      {props.children}
    </AppContext.Provider>
  );

};

export default AppContext;
