import React, { useEffect, useState } from 'react'
import { messageStore } from '../store/message'

const Chatbox = () => {
  const [msg, setmsg] = useState("")
  const { messages, selecteduser, getmessages, sendmessage, subscribedmessage } = messageStore();

  useEffect(() => {
    getmessages(selecteduser);
    subscribedmessage();
  }, [selecteduser]);

  return (
    <div className="relative h-screen w-full bg-blue-200 flex flex-col">

      {/* Messages */}
     <div className="flex-1 overflow-y-auto p-3 space-y-2">
  {messages.map((d, i) => {
    return (
      <div
        key={i}
        className={`flex ${
          d.reciverId == selecteduser ?  "justify-end" :  "justify-start"  
        }`}
      >
        <div
          className={`max-w-[60%] px-3 py-2 rounded-lg text-sm ${
            d.reciverid === selecteduser
              ? "bg-green-300 text-left"
              : "bg-white text-right"
          }`}
        >
          <p>{d.text}</p>
        </div>
      </div>
    );
  })}
</div>

      {/* Bottom Input Bar */}
      <div className="flex items-center h-[10vh] w-full bg-pink-200 px-2 gap-2">

        <input
          type="text"
          placeholder="Type message..."
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
          className="h-full flex-1 bg-white px-4 outline-none rounded-md"
        />

        <div
          className="h-full w-[60px] bg-green-400 flex items-center justify-center rounded-md cursor-pointer hover:bg-green-500 transition"
          onClick={() => {  
             
            
            if (msg === "") return;
            sendmessage(selecteduser,msg); // logic unchanged
          }}
        >
          <p className="text-white font-semibold">Send</p>
        </div>

      </div>

    </div>
  );
}

export default Chatbox;