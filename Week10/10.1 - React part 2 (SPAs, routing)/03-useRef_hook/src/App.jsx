import { useRef, useState } from "react"

function App(){
  return <div>
    <FocusInput/>
    <Clock/>
  </div>
}



// focus on input
function FocusInput(){

  const inputRef = useRef();

  function focusInput(){
    // document.getElementById("name").focus();
    inputRef.current.focus();
  }

  return <div>
    <input ref={inputRef} type="text" id="name" />
    <button onClick={focusInput}>Submit</button>
  </div>
}




// a clock with a start and stop button

function Clock(){
  const [count, setCount ] = useState(1);
  const timer = useRef();

  function startClock(){
    let value = setInterval(function(){
      setCount(count=>count+1);
    },1000);
    
    timer.current = value;
  }

  function stopClock(){
    clearInterval(timer.current);
  }

  return <div>
    {count}
    <br />
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}

export default App