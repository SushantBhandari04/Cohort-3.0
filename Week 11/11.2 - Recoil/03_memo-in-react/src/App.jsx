import { useState } from 'react';
import './App.css'
import { useEffect, memo } from 'react';

function App(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(count=>count+1)
    },3000)
  },[])

  return (
    <div>
      <CurrentCount/>
      <Increase/>
      <Decrease/>
    </div>
  )
}

const CurrentCount = memo(function(){
  return (
    <p>1</p>
  )
})

const Increase = memo(function(){
  function increase(){
    
  }

  return (
    <button onClick={increase}>Increase</button>
  )
})

const Decrease = memo(function(){
  

  function decrease(){
    
  }

  return (
    <button onClick={decrease}>Decrease</button>
  )
})

export default App