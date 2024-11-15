import { useState, useEffect } from "react";

function App(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    console.log("increase")
    setCount(current => current+1);
  }
  
  useEffect(function(){
    console.log("useEffect")
    const clock = setInterval(increaseCount,1000)

    // cleanup function
    return function(){
      clearInterval(clock);
    }
  },[])

  useEffect(function(){
    console.log("Count is increased to" , {count})
  },[count])

  return <div>
    {count}
  </div>
}

// dependancy 


// function App(){
//   const [currentTab, setCurrentTab] = useState(0);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function(){
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       })
//   }, [currentTab])

//   return <div>
//     <button style={{color: currentTab==1 ? "red" : "black"}} onClick={function(){
//       setCurrentTab(1);
//     }}>Todo #1</button>

//     <button style={{color: currentTab==2 ? "red" : "black"}} onClick={function(){
//       setCurrentTab(2);
//     }}>Todo #2</button>

//     <button style={{color: currentTab==3 ? "red" : "black"}} onClick={function(){
//       setCurrentTab(3);
//     }}>Todo #3</button>

//     <button style={{color: currentTab==4 ? "red" : "black"}} onClick={function(){
//       setCurrentTab(4);
//     }}>Todo #4</button>

//     <br/>

//     {loading ? "Loading..." : tabData.title}

//   </div>
// }

export default App