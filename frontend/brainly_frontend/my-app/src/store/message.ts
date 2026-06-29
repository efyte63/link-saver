// src/store/message.ts
import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";
import { useAuthStore } from "./auth.store";

interface MessageStore {
  messages: any[];
  selecteduser: string;
  getmessages: (receiverId: string) => Promise<void>;
  setselecteduser : (k:string)=>void;
  sendmessage: (receiverId: string, text: string) => Promise<void>;
  subscribedmessage: ()=>void
}
export const messageStore = create<MessageStore>((set, get) => ({
  messages: [],
  selecteduser: "",
  setselecteduser : (k)=>{
      set({selecteduser:k});
      console.log(get().selecteduser);
  },
  getmessages: async (reciverid) => {
    if (!reciverid) return;

    try {
      const res = await axiosInstance.get("/getmessage", {
        params: { reciverid },
      });
      set({ messages: res.data.messages || [] });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  },
  sendmessage: async (reciverid, text) => {
    if (!reciverid) return;
    try {
      console.log("call is going")
      const res = await axiosInstance.post("/sendmsg", {
        reciverid,
        text
      });
      console.log("call gone")
      set({
        messages: [...get().messages, res.data.message],
      });
    } catch (error) {
      console.log(error);
    }
  },subscribedmessage: () => {
  const socket = useAuthStore.getState().socket;
  if (!socket) return;
      socket.off("messagesend");
  socket.on("messagesend", (message) => {
    try {
      const selecteduser = get().selecteduser;

      console.log("message.reciverId:", message.reciverId);
      console.log("selecteduser:", selecteduser);

      // ✅ convert both to string (IMPORTANT)
      if (selecteduser !== message.senderId?.toString()) {
        console.log("i am returning")
        return;
      }

      console.log("client side working");

      set({
        messages: [...get().messages, message],
      });

    } catch (error) {
      console.log(error);
    }
  });
},
  unsubscribedmessage: () => {},
}));