import { useEffect, useRef, useState } from "react"

export default function App(){
  const [socket, setSocket] = useState();
  const inputRef = useRef(null);

  function sendMessage(){
    //@ts-ignore
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)
  }

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    //@ts-ignore
    setSocket(ws);

    ws.onmessage = (e)=>{
      alert(e.data)
    }

  },[])
  return <div>
    <input ref={inputRef} type="text" placeholder="message" />
    <button onClick={sendMessage}>Send</button>
  </div>
}