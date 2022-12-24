import React from 'react';
import rocket from '../assets/Rocket-type.png'
import buttonPlus from '../assets/button-plus.png'
import buttonMinus from '../assets/button-minus.png'
import rocketTypeData from './RocketData';

import './Rocket.css'
 
export default function Rocket (){
    const Style = {
        backgroundImage : `url(${rocket})`,
        
    }
    function handleButton(event)
    {
        event.target.src = buttonMinus
        
    }
   return ( 
   <div className='rocket-type'>
        <div className='rocket-title'>Rocket Type:</div>
        <img src={rocket} className="rocket-image" />
        <div className='message' id='message-1'><b>{rocketTypeData.message1.title}</b> {rocketTypeData.message1.ex}</div>
        <div className='message' id='message-2'><b>{rocketTypeData.message2.title}</b> {rocketTypeData.message2.ex}</div>
        <div className='message' id='message-3'><b>{rocketTypeData.message3.title}</b> {rocketTypeData.message3.ex}</div>
        <div className='message' id='message-4'><b>{rocketTypeData.message4.title}</b> {rocketTypeData.message4.ex}</div>
        <div className='message' id='message-5'><b>{rocketTypeData.message5.title}</b> {rocketTypeData.message5.ex}</div>
        <div className='rocket-button-group' style={Style}>
            <img src={buttonPlus} className = 'rocket-button' id = 'button-1' onClick={handleButton} />
            <img src={buttonPlus} className = 'rocket-button' id = 'button-2'/>
            <img src={buttonPlus} className = 'rocket-button' id = 'button-3'/>
            <img src={buttonPlus} className = 'rocket-button' id = 'button-4'/>
            <img src={buttonPlus} className = 'rocket-button' id = 'button-5'/>
        </div>
   </div>);
}
 