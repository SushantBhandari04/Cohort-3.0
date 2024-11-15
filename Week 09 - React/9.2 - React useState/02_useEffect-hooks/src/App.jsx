import { useEffect, useState } from "react"

function App(){
  // return <div>
  //   <Counter></Counter>
  // </div>


  // conditional rendering
  const [visibleCount, setVisibleCount] = useState(true);

  useEffect(function(){
    setInterval(function(){
      setVisibleCount(c=>!c);
    },5000)
  },[])

  return <div>
    hi
    { visibleCount && <Counter></Counter>}

    {/* <div style={{visibility: visibleCount ? "visible" :"hidden"}}><Counter></Counter></div>  if we want to hide but also keep the counter increasing */}
    hello
  </div>
}

// Mounting, Re-rendering, unmounting
function Counter(){
  const [count, setCount] = useState(0);

  console.log("Counter");

  // hooking into the lifecycle events of react
  // guard our setInterval from re-renders
  useEffect(function(){
    console.log("On mount");  // will only come once

    let clock = setInterval(function(){
      console.log("From inside setInterval")
      setCount(count => count+1)

      // setCount(function(count){
      //   return count+1;
      // })

    },1000);

    return function(){
      console.log("On unmount")
      clearInterval(clock);
    }
  },[])  // dependency array, cleanup

  return <div>
    <h2>{ count }</h2>
  </div>
}

export default App