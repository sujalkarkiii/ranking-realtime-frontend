import { io, Socket } from "socket.io-client";
let socketadmin: Socket | null = null;
export type tokentype={
    token:string
}

export const connectsocket=(token:tokentype)=>{
    socketadmin=io("http://localhost:3000/polls",{
        transports:['websocket'],
        auth:{token},
    })

    socketadmin.on("connect",()=>{
        console.log("connected to Backend",socketadmin?.id)
    })
    socketadmin.on('disconnect',()=>{
          console.log("Disconnected from polls namespace");
            socketadmin = null;
    })
    return socketadmin
}
export const emitstartpoll=()=>{
    if(!socketadmin?.connect){
        console.warn("Socket not connected, cannot emit vote")
        return
    }
    socketadmin.emit('start-poll')
}

export const emitstopoll=()=>{
    if(!socketadmin?.connect){
        console.warn("Socket not connected, cannot emit vote")
        return
    }
    socketadmin.emit('stop-poll')
}

