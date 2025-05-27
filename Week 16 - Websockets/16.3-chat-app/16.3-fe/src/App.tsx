import { useEffect, useRef, useState } from "react";

interface Message {
  message: string;
  socketId: string;
  userId: string;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [room, setRoom] = useState(true);

  const roomId = useRef<HTMLInputElement>(null);
  const userId = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLInputElement>(null);

  function joinRoom() {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    console.log("Control came here");

    ws.onopen = () => {
      console.log("Open");
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: roomId.current?.value,
            userId: userId.current?.value,
          },
        })
      );
      alert("Room joined");
      setRoom(false);
    };

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      console.log("Received message:", data);
      setMessages((m) => [
        ...m,
        {
          message: data.message,
          socketId: data.socketId,
          userId: data.userId,
        },
      ]);
    };
  }

  function sendMessage() {
    if (socket) {
      const messagePayload = {
        type: "chat",
        payload: {
          message: message.current?.value,
          socketId: socket.url,
        },
      };
      console.log("Sending message:", messagePayload);
      socket.send(JSON.stringify(messagePayload));
    }
  }

  return (
    <div>
      {room ? (
        <div className="flex gap-2">
          <input
            ref={roomId}
            className="border-2 px-4 py-2 rounded-md bg-gray-200"
            type="text"
            placeholder="Roomid"
          />
          <input
            ref={userId}
            className="border-2 px-4 py-2 rounded-md bg-gray-200"
            type="text"
            placeholder="Userid"
          />
          <button
            className="px-4 py-2 rounded-md bg-black text-white"
            onClick={joinRoom}
          >
            Join
          </button>
        </div>
      ) : (
        <div className="flex flex-col h-full w-full">
          <div className="h-[90vh] bg-blue-300 p-4 flex flex-col gap-2">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`py-2 px-4 rounded-md flex w-fit text-white ${
                  m.userId === userId.current?.value ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {m.message}
              </div>
            ))}
          </div>
          <div className="flex p-4 w-full">
            <input
              ref={message}
              type="text"
              placeholder="Enter message..."
              className="w-full bg-gray-300 px-2"
            />
            <button className="p-2 bg-green-500" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}