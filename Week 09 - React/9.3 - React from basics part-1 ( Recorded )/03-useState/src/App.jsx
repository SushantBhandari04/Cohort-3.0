import { useState } from "react"

function App(){
  return <div>
    <ToggleButton/>
    <IncreaseCount/>
  </div>
}

function ToggleButton(){
  const [isVisible, setIsVisible] = useState(true);

  function toggle(){
    setIsVisible(!isVisible);
  }

  return <div>
    <button onClick={toggle}>Toggle</button>

    {isVisible && <p>This is toggling.</p>}
  </div>
}

function IncreaseCount(){
  const [count, setCount] = useState(0);

  function increase(){
    setCount(count+1);
  }

  return <div>
    <button onClick={ increase }>Increase Count</button>
    { count }
  </div>
}

export default App