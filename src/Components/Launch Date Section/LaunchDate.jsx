import React, { useState, useEffect } from "react";
import moon from "../images/moon-build.png";
import earth from "../images/earth.png";
import rocket from "../images/rocket.png";

import Button from "../Button/Button";
import "./LaunchDate.css";
import { Link } from "react-router-dom";
import path from "../images/arrow.png";

import AppContext from "../../store/app-context";

const LaunchDate = () => {
  //context get it from here
  const [time, setTime] = React.useState({ year: "", quarter: "" });

  const appctx = useContext(AppContext);

  function handleClick(event) {
    event.target.name == "year"
      ? setTime((prevTime) => ({ ...prevTime, year: event.target.value }))
      : setTime((prevTime) => ({ ...prevTime, quarter: event.target.value }));
  }
  console.log(time);

  useEffect(() => {
    appctx.settime(time);
  }, [time]);

  return (
    <div className="build-launch">
      <img className="earth" src={earth} alt="" />
      <img className="rocket" src={rocket} alt="" />
      <img className="path" src={path} alt="" />
      <div className="launch-window">
        <h2>PICK A LAUNCH DATE</h2>

        <h3>SELECT A YEAR</h3>
        <Button name="year" value="2022" onClick={handleClick}>
          2022
        </Button>
        <Button name="year" value="2023" onClick={handleClick}>
          2023
        </Button>
        <Button name="year" value="2024" onClick={handleClick}>
          2024
        </Button>
        <h3>SELECT A QUARTER</h3>
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <Button name="quarter" value="Q1" onClick={handleClick}>
            Q1
          </Button>
          <Button name="quarter" value="Q2" onClick={handleClick}>
            Q2
          </Button>
          <Button name="quarter" value="Q3" onClick={handleClick}>
            Q3
          </Button>
          <Button name="quarter" value="Q4" onClick={handleClick}>
            Q4
          </Button>
        </div>

        <div className="launch" style={{ float: "right" }}>
          <Link to="/launch" style={{ marginRight: "4rem" }}>
            <Button>Build & Launch</Button>
          </Link>
        </div>
      </div>
      <img className="moon" src={moon} alt="" />
    </div>
  );
};

export default LaunchDate;
