import { useState } from "react"

function App() {

  return <div>
      <Counter></Counter>
    </div>
}

function Counter(){
  const [count, setCount] = useState(0);   // useState hook

  function increaseCount(){
    setCount( count+1 );
  }

  function decreaseCount(){
    setCount( count-1 );
  }

  function resetCount(){
    setCount( 0 );
  }

  return <div>
    <h1>{ count }</h1>
    <button onClick={ increaseCount }>Increase Count</button>
    <button onClick={ decreaseCount }>Decrease Count</button>
    <button onClick={ resetCount }>Reset Count</button>
  </div>
}

export default App