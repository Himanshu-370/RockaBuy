import React, { useEffect, useState, useContext } from "react";

import "./Orbit.css";

import moon from "../images/moon-build.png";
import earth from "../images/orbit_earth.png";
import meo from "../images/initialState/meo-vector.png";
import polar from "../images/initialState/polar-vector.png";
import sunSync from "../images/initialState/sunsync-vector.png";
import leo from "../images/initialState/leo-vector.png";
import gto from "../images/initialState/gto-vector.png";
import esc from "../images/initialState/esc-vector.png";
import geo from "../images/initialState/geo-vector.png";
import OrbitButton from "./OrbitButton";

import gtoClicked from "../images/finalState/gto-clicked.png";
import geoClicked from "../images/finalState/geo-clicked.png";
import meoClicked from "../images/finalState/meo-clicked.png";
import leoClicked from "../images/finalState/leo-clicked.png";
import escClicked from "../images/finalState/esc-clicked.png";
import synClicked from "../images/finalState/syn-clicked.png";
import polarClicked from "../images/finalState/polar-clicked.png";
import OrbitNames from "./OrbitNames";
import AppContext from "../../store/app-context";

function Orbit() {
  //get the orbit name from somehere around here
  const [gtoImg, setgtoImg] = useState(gto);
  const [geoImg, setgeoImg] = useState(geo);
  const [meoImg, setmeoImg] = useState(meo);
  const [leoImg, setleoImg] = useState(leo);
  const [escImg, setescImg] = useState(esc);
  const [synImg, setsynImg] = useState(sunSync);
  const [polarImg, setpolarImg] = useState(polar);

  const [gtoActive, setgtoActive] = useState("");
  const [geoActive, setgeoActive] = useState("");
  const [meoActive, setmeoActive] = useState("");
  const [leoActive, setleoActive] = useState("");
  const [escActive, setescActive] = useState("");
  const [synActive, setsynActive] = useState("");
  const [polarActive, setpolarActive] = useState("");

  const [isthatdisable, setDisable] = useState(true);

  const [orbit, setOrbit] = useState('')

  const appctx = useContext(AppContext);

  useEffect(()=>{
    appctx.setpayload({...appctx.payload , orbit: orbit})
  })

  function handlegeo() {
    if (geoImg == geo) {
      setOrbit('GEO')
      console.log(geoImg);
      setgeoImg(geoClicked);
      setgtoImg(gto);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setgeoActive("activeOrbitClass");
      setgtoActive('');
      setmeoActive('');
      setleoActive('');
      setescActive('');
      setsynActive('');
      setpolarActive('')
    } else {
      setOrbit('')
      setgeoImg(geo);
      setgtoImg(gto);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setgeoActive("");
    }
  }

  function handlegto() {
    if (gtoImg == gto) {
      setOrbit('GTO')
      setgtoImg(gtoClicked);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setgtoActive("activeOrbitClass");
      setgeoActive('');
      setmeoActive('');
      setleoActive('');
      setescActive('');
      setsynActive('');
      setpolarActive('')
    } else {
      setOrbit('')
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setgtoActive("");
    }
  }

  function handlemeo() {
    if (meoImg == meo) {
      setOrbit('MEO')
      setmeoImg(meoClicked);
      setgtoImg(gto);
      setgeoImg(geo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setmeoActive("activeOrbitClass");
      setgtoActive('');
      setgeoActive('');
      setleoActive('');
      setescActive('');
      setsynActive('');
      setpolarActive('')
    } else {
      setOrbit('')

      setmeoImg(meo);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setmeoActive("");
    }
  }

  function handleleo() {
    if (leoImg == leo) {
      setOrbit('LEO')

      setleoImg(leoClicked);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setleoActive("activeOrbitClass");
      setgtoActive('');
      setgeoActive('');
      setmeoActive('');
      setescActive('');
      setsynActive('');
      setpolarActive('')
    } else {
      setOrbit('')

      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setleoActive("");
    }
  }

  function handleesc() {
    if (escImg == esc) {
      setOrbit('Earth Escape')

      setescImg(escClicked);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setsynImg(sunSync);
      setpolarImg(polar);

      setescActive("activeOrbitClass");
      setgtoActive('');
      setgeoActive('');
      setmeoActive('');
      setleoActive('');
      setsynActive('');
      setpolarActive('')
    } else {
      setOrbit('')

      setescImg(esc);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setsynImg(sunSync);
      setpolarImg(polar);

      setescActive("");
    }
  }

  function handlesyn() {
    if (synImg == sunSync) {
      setOrbit('Sun Sync')

      setsynImg(synClicked);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setpolarImg(polar);

      setsynActive("activeOrbitClass");
      setgtoActive('');
      setgeoActive('');
      setmeoActive('');
      setleoActive('');
      setescActive('');
      setpolarActive('')
    } else {
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setsynActive("");
    }
  }

  function handlepolar() {
    if (polarImg == polar) {
      setOrbit('Polar')

      setpolarImg(polarClicked);
      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);

      setpolarActive("activeOrbitClass");
      setgtoActive('');
      setgeoActive('');
      setmeoActive('');
      setleoActive('');
      setescActive('');
      setsynActive('');
    } else {
      setOrbit('')

      setgtoImg(gto);
      setgeoImg(geo);
      setmeoImg(meo);
      setleoImg(leo);
      setescImg(esc);
      setsynImg(sunSync);
      setpolarImg(polar);

      setpolarActive("");
    }
  }

  useEffect(()=>{
    if(gtoImg==gtoClicked || geoImg==geoClicked || meoImg==meoClicked || leoImg==leoClicked || escImg==escClicked || synImg==synClicked || polarImg==polarClicked){
      setDisable(false)
    }else if(gtoImg==gto || geoImg==geo || meoImg==meo || leoImg==leo || escImg==esc || synImg==syn || polarImg==polar){
      setDisable(true)
    }
  }, [gtoImg, geoImg, meoImg, leoImg, escImg, synImg, polarImg])

  return (
    <div className="orbitDiv">
      <img className="moon-img" src={moon} />
      <img className="earth-img" src={earth} />
      <img className="meo-img" src={meoImg} />
      <img className="polar-img" src={polarImg} />
      <img className="sunSync-img" src={synImg} />
      <img className="leo-img" src={leoImg} />
      <img className="gto-img" src={gtoImg} />
      <img className="esc-img" src={escImg} />
      <img className="geo-img" src={geoImg} />

      <OrbitNames />
      

      <div className="orbit-content">
        <h2>ORBIT</h2> <br />
        <h3>CORE SERVICE(EAST COAST)</h3>
        <OrbitNames />
        <div className="row">
          <OrbitButton handleClick={handlegto} activeClass={gtoActive}>
            GTO
            <br />
            1800m/s
          </OrbitButton>
        </div>
        <h3>EAST COAST LAUNCH</h3>
        <div className="row">
          <OrbitButton handleClick={handlegto} activeClass={gtoActive}>
            GTO
            <br />
            1500m/s
          </OrbitButton>
          <OrbitButton handleClick={handlegeo} activeClass={geoActive}>
            GEO
          </OrbitButton>
          <OrbitButton handleClick={handlemeo} activeClass={meoActive}>
            MEO
          </OrbitButton>
          <OrbitButton handleClick={handleleo} activeClass={leoActive}>
            LEO
          </OrbitButton>
          <OrbitButton handleClick={handleesc} activeClass={escActive}>
            EARTH
            <br />
            ESCAPE
          </OrbitButton>
        </div>
        <h3>CORE SERVICE(EAST COAST)</h3>
        <div className="row">
          <OrbitButton handleClick={handlesyn} activeClass={synActive}>
            SUN
            <br />
            SYNC
          </OrbitButton>
          <OrbitButton handleClick={handlepolar} activeClass={polarActive}>
            POLAR
            <br />
            {"      "}
          </OrbitButton>
        </div>
        {isthatdisable?<button disabled className="orbit-btn" >Next</button> : <button className="orbit-btn" >Next</button>}
      </div>
    </div>
  );
}

export default Orbit;
