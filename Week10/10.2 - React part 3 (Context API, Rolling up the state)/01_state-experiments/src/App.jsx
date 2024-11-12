import { useState } from "react"

function App(){
  return <div>
    <LightBulb/>
  </div>
}

function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
  </div>
}

function BulbState({bulbOn}){
  return <div>
    { bulbOn ? "Bulb on" : "Bulb off" }
  </div>
}

function ToggleBulbState({setBulbOn}){

  function toggleBulb(){
    setBulbOn(currentValue => !currentValue);
  }

  return <div>
    <button onClick={toggleBulb}>Toggle bulb.</button>
  </div>
}

export default App