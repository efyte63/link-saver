import { useEffect, useState } from 'react'
import { messageStore } from '../store/message'
import { useAuthStore } from '../store/auth.store'

const Chatbox = () => {
  const [msg, setmsg] = useState("")
  const { messages, selecteduser, getmessages, sendmessage, subscribedmessage, setselecteduser } = messageStore();
  const { allusers, onlineusers } = useAuthStore();

  const activeuser = allusers.find((u) => u._id === selecteduser);

  useEffect(() => {
    getmessages(selecteduser);
    subscribedmessage();
  }, [selecteduser]);

  if (!selecteduser) {
    return (
      <div className="hidden md:flex h-full w-full flex-col items-center justify-center gap-2 bg-[#FBF7EF] text-center px-4">
        <div className="w-14 h-14 rounded-full bg-[#F2542D]/10 flex items-center justify-center text-2xl">
          💬
        </div>
        <p className="font-serif text-xl text-[#1F1B16]">Select a conversation</p>
        <p className="text-sm text-[#A79A7E] max-w-xs">
          Pick someone from the list to start chatting.
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full bg-[#FBF7EF] flex flex-col">

      {/* Header */}
      <div className="flex items-center gap-3 h-14 sm:h-16 w-full bg-white border-b border-[#E7DFCB] px-3 sm:px-4 shrink-0">

        <button
          onClick={() => setselecteduser("")}
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-[#7A6F58] hover:bg-[#F5EFE1] transition"
          aria-label="Back to users"
        >
          ←
        </button>

        <div className="w-9 h-9 shrink-0 rounded-full bg-[#38BDF8]/20 text-[#0EA5E9] flex items-center justify-center text-sm font-bold">
          {(activeuser?.username?.[0] || "U").toUpperCase()}
        </div>

        <div className="flex flex-col leading-tight min-w-0">
          <span className="font-medium text-[#1F1B16] truncate">
            {activeuser?.username || "Chat"}
          </span>
          <span className="text-xs text-[#A79A7E]">
            {onlineusers.includes(selecteduser) ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2">
        {messages.map((d, i) => {
          return (
            <div
              key={i}
              className={`flex ${
                d.reciverId == selecteduser ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[85%] sm:max-w-[60%] px-3 py-2 rounded-2xl text-sm shadow-sm ${
                  d.reciverid === selecteduser
                    ? "bg-[#F2542D] text-white text-left rounded-br-sm"
                    : "bg-white text-[#1F1B16] text-left rounded-bl-sm"
                }`}
              >
                <p>{d.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Input Bar */}
      <div className="flex items-center min-h-[64px] sm:h-[10vh] w-full bg-white border-t border-[#E7DFCB] px-2 sm:px-3 gap-2 shrink-0">

        <input
          type="text"
          placeholder="Type message..."
          value={msg}
          onChange={(e) => setmsg(e.target.value)}
          className="h-11 sm:h-12 flex-1 min-w-0 bg-[#F5EFE1] px-4 outline-none rounded-full text-sm sm:text-base focus:ring-1 focus:ring-[#F2542D]"
        />

        <div
          className="h-11 w-11 sm:h-12 sm:w-[70px] shrink-0 bg-[#F2542D] flex items-center justify-center rounded-full cursor-pointer hover:bg-[#D9451F] transition"
          onClick={() => {


            if (msg === "") return;
            sendmessage(selecteduser,msg); // logic unchanged
          }}
        >
          <p className="text-white font-semibold text-sm hidden sm:block">Send</p>
          <p className="text-white font-semibold text-sm sm:hidden">➤</p>
        </div>

      </div>

    </div>
  );
}

export default Chatbox;