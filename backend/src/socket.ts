import http from "http";
import {Server} from "socket.io";
import  express from "express";
const app = express();
const server = http.createServer(app);
const onlineUsers = new Map<string, string>();
const io:any = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});
function returnsocketid(userid :string)
{
  return onlineUsers.get(userid);

}
io.on("connection" , (socket:any)=>{
  console.log(`new connection ${socket.id}`);
  
    const userid = socket.handshake.query.userId

    onlineUsers.set(userid,socket.id);
     
    console.log(onlineUsers);

socket.emit("onlineusers", Array.from(onlineUsers.keys()));
io.emit("onlineusers", Array.from(onlineUsers.keys())); // optional but better

    socket.on("disconnect", ()=>{

       onlineUsers.delete(userid);
      console.log(`user disconnected ${socket.id}`)

    })
})
export {app, io , server , returnsocketid} 