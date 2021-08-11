import React, {useState} from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Locations from './components/locations';
import Characters from './components/characters';
import logo from "./img/logo.png";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters.results);
  console.log("Locations data: ");
  console.log(locations);
  const [clicked, setClicked] = useState("landing");

  function showCharacters (){
    setClicked("characters");
    }
  function showLocations (){
    setClicked("locations");
    }

  function back() {
    setClicked("landing");
  }

if(clicked === "characters") {
  return (
    <div className="App">
      <button className="back-btn" onClick={back}><i class="fas fa-home"></i></button>
      <div id="landing">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="btn-container">
                <button className="btn onPage" onClick= {showCharacters}>Characters</button>
                <button className="btn" onClick= {showLocations}>Locations</button>
            </div>              
      </div>
    
      <Characters></Characters>
    </div>
  )
} else if(clicked === "locations") {
    return (
      <div className="App">
       <button className="back-btn" onClick={back}><i class="fas fa-home"></i></button>
       <div id="landing">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="btn-container">
                <button className="btn" onClick= {showCharacters}>Characters</button>
                <button className="btn onPage" onClick= {showLocations}>Locations</button>
            </div>
      </div>
    
      <Locations></Locations>
      </div>
      )
} else {

  return (
    <div className="App">
      <div id="landing">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="btn-container">
                <button className="btn" onClick= {showCharacters}>Characters</button>
                <button className="btn" onClick= {showLocations}>Locations</button>
            </div>
            <div>
                <p className='intro'>If you want to know more about the characters of the amazing Rick and Morty series, don't hesitate to click the Characters button above. You can also find more info about the locations by clicking the Locations button.</p>
              </div>
      </div>
    
    </div>
    )
  }
}

export default App;
