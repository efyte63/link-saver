import { create } from "zustand";
import { axiosInstance } from "../lib/axiosInstance";

type LinkType = "twitter" | "youtube" | "instagram" | "other";

interface Content {
  _id?: string;
  title: string;
  link: string;
  linktype: LinkType;
  description: string;
  userId: string;
}

interface contentstate {
  contentlinks: Content[];

  getcontent: () => Promise<void>;
  addcontent: (
    link: string,
    title: string,
    description: string,
    linktype: LinkType
  ) => Promise<void>;

  searchcontent: (query: string) => void;
  deletecontent: (id: string) => Promise<void>;
}

export const usecontent = create<contentstate>((set, get) => ({
  contentlinks: [],

  // GET ALL CONTENT
  getcontent: async () => {
    try {
      const res = await axiosInstance.get("/app/v1/content");
      set({ contentlinks: res.data.content });
    } catch (error) {
      console.log(error);
    }
  },

  // ADD CONTENT
  addcontent: async (link, title, description, linktype) => {
    try {
      const res = await axiosInstance.post("/app/v1/content", {
        link,
        title,
        description,
        linktype,
      });

      set((state) => ({
        contentlinks: [...state.contentlinks, res.data.content],
      }));
    } catch (error) {
      console.log(error);
    }
  },

  // SEARCH (local filter)
 searchcontent: async (query: string) => {
  try {
    const res = await axiosInstance.get("/search", {
      params: { query },
    });

  if (!res.data || res.data.length === 0) {
  return;
}
    console.log(res.data);
    set({ contentlinks: res.data }); // ✅ FIX HERE
    
  } catch (error) {
    console.log(error);
  }
},


  // DELETE CONTENT
  deletecontent: async (id: string) => {
    try {
      await axiosInstance.post("/app/v1/delete", {
        contentid: id,
      });

      set((state) => ({
        contentlinks: state.contentlinks.filter((c) => c._id !== id),
      }));
    } catch (error) {
      console.log(error);
    }
  },
}));