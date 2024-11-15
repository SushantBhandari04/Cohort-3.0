
import './App.css'
import {useContext} from 'react'
import { CounterContextProvider, CounterContext } from './CounterContextProvider';

function App(){
  return <div>
    <CounterContextProvider>
      <Increase/>
      <Decrease/>
      <br />
      <Value/>
    </CounterContextProvider>
  </div>
}

function Increase(){
  const {count, setCount} = useContext(CounterContext);

  function increase(){
    setCount(count+1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease(){
  const {count, setCount} = useContext(CounterContext);
  
  function decrease(){
    setCount(count-1);
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Value(){
  const {count} = useContext(CounterContext);

  return <div>
    Count {count}
  </div>
}

export default App
