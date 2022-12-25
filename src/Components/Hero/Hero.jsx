import React from "react";
import ring1 from "../../assets/rings-1.png";
import ring2 from "../../assets/rings-2.png";
import moon from "../../assets/moon 1.png";
import distance from "../../assets/distance.png";
import rocket from "../../assets/Rocket.png";

import "./Hero.css";
import Button from "../Button/Button";
import Box from "../Box/Box";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <React.Fragment>
      <div className="hero">
        <img className="ring1" src={ring2} />
        <img className="ring2" src={ring1} />
        <img className="moon" src={moon} />

        <div className="main-content">
          <div className="distance">
            <img src={distance} />
            <div>
              <p>Moon/Earth</p>
              <h3>384,400 km</h3>
            </div>
          </div>
          <h1>Moon Travel</h1>
          <p>
            Send your customised space rockets to moon and be a part of the
            space
            <br /> community.
          </p>
<<<<<<< HEAD
=======
          <Link to="/build">
            <Button>Get Started</Button>
          </Link>
>>>>>>> c07d6fd5877ac9380806d029630039e9b1db5a44
          <div className="boxes">
            <Box className="large-box">
              <img className="rocket" src={rocket} />
              <p>Space Travel</p>
              <span>Stories</span>
            </Box>
            <Box>
              <p>
                Rocket
                <br /> Builds
              </p>
              <span>849</span>
            </Box>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
