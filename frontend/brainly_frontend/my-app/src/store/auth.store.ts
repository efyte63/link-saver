// src/store/auth.store.ts
import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";
import { Socket, io } from "socket.io-client";

interface User {
  _id?: string;
  username?: string;
}

interface AuthState {
  user: User | null;
  socket: Socket | null;
  onlineusers: string[];
  allusers: any[];
  
login: (email: string, password: string) => Promise<boolean>;
signup: (username:string ,email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  getallusers:  ()=>void;
  connectSocket: () => void;
  disconnectSocket: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  socket: null,
  onlineusers: [],
   allusers: [],
login: async (email, password) => {
  try {
    const res = await axiosInstance.post("/app/v1/signin", {
      email,
      password,
    });

    set({ user: res.data.user });
    get().connectSocket();

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
},
signup: async (username ,email, password) => {
  try {
    await axiosInstance.post("/app/v1/signup", {
      username,
      email,
      password,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
},
  logout: async () => {
    try {
      await axiosInstance.post("/app/v1/logout");
      get().disconnectSocket();
      set({ user: null });
    } catch (error) {
      console.log(error);
    }
  },

  getallusers: async () => {
    try {
      const res = await axiosInstance.get("/getusers");
      set({ allusers: res.data.users || [] }); // ✅ safe fallback
      console.log(get().allusers);
    } catch (error) {
      console.log(error);
    }
  },


  connectSocket: () => {
    const { user, socket } = get();

    if (!user || socket) return;

    const newsocket = io(
      "https://link-saver-ashy.vercel.app",
     {
      query: { userId: user._id },
      withCredentials: true,
    });

    newsocket.on("connect", () => {
      console.log("socket connected:", newsocket.id);
    });

    newsocket.on("onlineusers", (users: string[]) => {
      if (Array.isArray(users)) {
        set({ onlineusers: users });
        console.log(get().onlineusers);
       
      }
    });

    set({ socket: newsocket });
  },

  disconnectSocket: () => {
    const socket = get().socket;
    if (!socket) return;

    socket.disconnect();
    set({ socket: null, onlineusers: [] });
  },
}));