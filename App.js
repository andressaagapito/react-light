import './App.css';
import LightsOn from "./assets/LightsOn.png";
import LightsOff from "./assets/LightsOff.png";
import { useState } from "react";

function App() {

const [Light, setLight]= useState(false);

return (
    <div className="container">
        <div className="child">
        {Light ? <img src={LightsOn}></img> : <img src={LightsOff}></img>}
        <button onClick={ () => {
            setLight(true)
        }}>Lights On</button>
        <button onClick={ () => {
            setLight(false)
        }}>Lights Off</button>
        </div>

    </div>
    )
}
export default App;
