import { React, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Build from "./Components/Build Section/Build";
import NavBar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import LaunchDate from "./Components/Launch Date Section/LaunchDate";
import Orbit from "./Components/Orbit/Orbit";
import About from "./Components/About/About.jsx";
import Launching from "./Components/Launch/Launching";

import { Route } from "react-router-dom";
import Rocket from "./Components/Rocket Section/Rocket";

import Login from "./Components/Get Started/Login";
import SignUp from "./Components/Get Started/SignUp";
import { AppContextProvider } from "./store/app-context";

var location = localStorage.getItem('location1')
var payload = localStorage.getItem('payload')
var time = localStorage.getItem('time')

console.log(location, payload, time)

function App() {
  return (
    <AppContextProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar />



        <Route path="/" exact>
          <Hero />
        </Route>

        <Route path="/orbit" exact>
          <Orbit />
        </Route>

        <Route path="/home">
          <Hero />
        </Route>

        <Route path="/build">
          <Build />
        </Route>

        <Route path="/launch-date">
          <LaunchDate />
        </Route>

        <Route path="/launch">
          <Launching />
        </Route>

        <Route path="/rocket">
          <Rocket />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </div>
    </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
