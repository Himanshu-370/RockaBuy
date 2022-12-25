import { useState } from "react";
import moon from '../images/moon-build.png'
import Data from "./BuildData";
import './Build.css'
import Location from "./Location";
import NavBar from "../Navbar/Navbar";

export default function Build()
{
    <NavBar />
    console.log("build")
    const [regionsLeft, setRegionsLeft] = useState(Data.left)
    const [regionsRight, setregionsRight] = useState(Data.right)
    const Style = {
        backgroundImage : `url(${moon})`,
    }
    //Context location from here
    
    const [contextLocation, setContextLocation] = useState('')
    console.log(location, contextLocation)

    const locationsLeft = regionsLeft.map(location => <Location area = {location} setLocation = {setContextLocation} direction = 'left' style = {{height : `15vh`}} />)
    const locationsRight = regionsRight.map(location => <Location area = {location} setLocation = {setContextLocation} direction = 'right' style = {{height : `18vh`}}/>)
    return (
        <div className="build" style={Style}>
            <div className="build-title"> Where TO ? </div>
            <div className="locations-left">
                {locationsLeft}
            </div>
            <div className="loctions-right">
                {locationsRight}
            </div>
        </div>        
    )
}