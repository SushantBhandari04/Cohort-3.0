import { useRef, useState, useEffect } from "react"

function App(){
  return <div>
    <Chat/>
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



function Chat() {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const chatBoxRef = useRef(null);

  // Function to simulate adding new messages
  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, "New message!"]);
  };

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <div 
        ref={chatBoxRef} 
        style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
      >
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <button onClick={addMessage}>Add Message</button>
    </div>
  );
}

export default App