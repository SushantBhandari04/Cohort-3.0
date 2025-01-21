import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port: 8080});

// wss.on("connection", function(socket){
//     console.log("User connected");
//     socket.send("Hello");

//     setInterval(()=>{
//         socket.send("Sol price is " + Math.random());
//     },1000)

//     socket.on("message", (e)=>{
//         console.log(e.toString());
//     })
// })


wss.on("connection", (socket)=>{
    console.log("User connected");

    socket.on("message",(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong");
        }
    })
})