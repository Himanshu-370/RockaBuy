import React from 'react'
import moon from './images/moon-build.png'
import earth from './images/earth.png'
import rocket from './images/rocket.png'

import Button from "./Button";
import "./LaunchDate.css";

const LaunchDate = () => {
  return (
    <div className='build-launch'>
        <img className='earth' src= {earth} alt="" />
        <img className='rocket' src= {rocket} alt="" />
        <div className='path'></div>
      <div className="launch-window">
        <h2>PICK A LAUNCH DATE</h2>

        <h3>SELECT A YEAR</h3>
        <Button>2022</Button>
        <Button>2023</Button>
        <h3>SELECT A QUARTER</h3>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <Button>Q1</Button>
        <Button>Q2</Button>
        <Button>Q3</Button>
        <Button>Q4</Button>
        </div>
        
        <div className='launch' style={{float: "right"}}><Button>Build & Launch</Button></div>
      </div>
      <img className='moon' src= {moon} alt="" />
    </div>
  )
}

export default LaunchDate
