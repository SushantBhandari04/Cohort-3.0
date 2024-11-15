import { useState, useContext } from "react"
import { BulbContext, BulbContextProvider } from "./BulbContextProvider";

// prop drilling,  context api

// const BulbContext = createContext();

function App(){
  // const [bulbOn, setBulbOn] = useState(true);

  return <div>

    {/*  method 1 */}
    {/* <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn
    }}>
      <LightBulb/>
    </BulbContext.Provider> */}

    

    {/* method 2 */}
    <BulbContextProvider>
      <LightBulb/>
    </BulbContextProvider>

  </div>
}

function LightBulb(){

  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState(){
  const { bulbOn } = useContext(BulbContext);

  return <div>
    { bulbOn ? "Bulb on" : "Bulb off" }
  </div>
}

function ToggleBulbState(){
  const { bulbOn, setBulbOn } = useContext(BulbContext);

  function toggleBulb(){
    // setBulbOn(currentValue => !currentValue);
    setBulbOn(!bulbOn);
  }

  return <div>
    <button onClick={toggleBulb}>Toggle bulb.</button>
  </div>
}

export default App