import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
    socket: WebSocket,
    room: string,
    userId: string
}

let allSockets: User[] = [];

wss.on("connection", (socket)=>{
    console.log(`User connected`);

    socket.on("message", message=>{
        const parsedMessage = JSON.parse(message as unknown as string);

        if(parsedMessage.type === "join"){
            console.log("User joined room")
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId,
                userId: parsedMessage.payload.userId
            })
        }

        if(parsedMessage.type === "chat"){
            console.log("User sends message")
            const currentUserRoom = allSockets.find(x=>x.socket == socket)?.room

            allSockets.forEach(x=>{
                if(x.room==currentUserRoom){
                    x.socket.send(JSON.stringify({
                        message: parsedMessage.payload.message,
                        socket: socket,
                        userId: x.userId
                    }))
                }
            })
        }
    })
})