import { useState, useEffect } from "react"

function App(){
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increase(){
    setCount1(count1+1);
  }

  function decrease(){
    setCount2(count2-1);
  }

  return <div>
    <Counter count1={count1} count2={count2}></Counter>
    <button onClick={ increase }>Increase</button>
    <button onClick={ decrease }>Decrease</button>
  </div>
}

function Counter(props){

  useEffect(function(){
    console.log("mount");

    return function(){
      console.log("unmount");
    }
  }, [])


  useEffect(function(){
    console.log("count has changed");

    return function(){
      console.log("cleanup inside second effect")
    }
  }, [props.count1])  // this will only run when count1 gets changed

  return <div>
    Counter { props.count1 } <br/>
    Counter { props.count2 }
  </div>

}

export default App