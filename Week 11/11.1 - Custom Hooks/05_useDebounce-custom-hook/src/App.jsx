import { useEffect, useState } from "react"
import { useDebounce } from "./hooks/useDebounce";
import './App.css'

function App(){

  const [inputValue, setInputValue] = useState("");

  function change(e){
    setInputValue(e.target.value);
  }

  const useDebouncedValue = useDebounce(inputValue, 200);

  useEffect(()=>{
    // expensive operation
    console.log("Expensive operation.")
  }, [useDebouncedValue])

  return <div>
    <input type="text" onChange={change} />
  </div>
}

export default App






// // Create a function component named App that serves as the main application component
// function App() {
//     // Create a function named sendDataToBackend that logs the string "api.amazon.com/search/" to the console when called
//     function sendDataToBackend() {
//         console.log("api.amazon.com/search/");
//     }

//     // Create a function named debounceFn that calls the useDebounce custom hook with the sendDataToBackend function as an argument
//     const debounceFn = useDebounce(sendDataToBackend);

//     // Return the JSX for the component
//     return (
//         <div>
//             {/* Create an h1 element with the text "Debounce Example" */}
//             <h1>Debounce Example</h1>

//             {/* Create an input element with a type of text and an onChange event handler that calls the debounceFn function */}
//             <input type="text" onChange={debounceFn} />
//         </div>
//     );
// }

// Export the App component as the default export from this module
// export default App;