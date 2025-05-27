"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    console.log(`User connected`);
    socket.on("message", message => {
        var _a;
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            console.log("User joined room");
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId,
                userId: parsedMessage.payload.userId
            });
        }
        if (parsedMessage.type === "chat") {
            console.log("User sends message");
            const currentUserRoom = (_a = allSockets.find(x => x.socket == socket)) === null || _a === void 0 ? void 0 : _a.room;
            allSockets.forEach(x => {
                if (x.room == currentUserRoom) {
                    x.socket.send(JSON.stringify({
                        message: parsedMessage.payload.message,
                        socket: socket,
                        userId: x.userId
                    }));
                }
            });
        }
    });
});
