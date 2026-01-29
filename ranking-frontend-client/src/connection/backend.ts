import { io, Socket } from "socket.io-client";

let socket3000: Socket | null = null;

export type PollSocketOptions = {
  token: string
}

export const connectPollSocket = ({ token }: PollSocketOptions) => {
  if (socket3000) return socket3000
  socket3000 = io("http://localhost:3000/polls/join", {
    transports: ["websocket"],
    auth: {token},
    
  })

  socket3000.on("connect", () => {
    console.log("Connected to polls namespace:", socket3000?.id)
    socket3000!.emit("join")
  })

  socket3000.on("disconnect", () => {
    console.log("Disconnected from polls namespace");
    socket3000 = null;
  })

  socket3000.on("connect_error", (err) => {
    console.error("socket3000 connection error:", err.message)
  })

  return socket3000
};


export const emitVote = (nomination: string) => {
   if (!socket3000?.connected) {
    console.warn("Socket not connected, cannot emit vote")
    return
  }
  socket3000?.emit("vote", { nomination })
};