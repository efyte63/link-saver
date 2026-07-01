import React, { useEffect } from 'react'
import { Button } from "../component/ui/Button";
import { Plusicon, Shareicon, SearchIcon , MessageIcon,LogoutIcon } from "../component/ui/iconscomp";
import { useState } from "react";
import Sidebar from "../component/Sidebar";
import { Cards } from "../component/cards";
import { usecontent } from '../store/content.store';
import {useAuthStore} from "../store/auth.store"; 
import { useNavigate } from "react-router-dom";

const Real = () => {
  const navigate = useNavigate();
  const {
    contentlinks,
    getcontent,
    addcontent,
    deletecontent,
    searchcontent,
    
  } = usecontent();

  const {
    logout
  } = useAuthStore();

  const [searchval, setsearchval] = useState("");
  const [adding, setadding] = useState(false);

  const [title, setitle] = useState("");
  const [link, setlink] = useState("");
  const [description, setdescription] = useState("");
  const [linktype, setLinktype] =
  useState<"twitter" | "instagram" | "youtube" | "other">("twitter");


  async function logoutuser(){
    try{
      await logout();
      navigate("/login");
    }catch(error)
    {
      console.log(error); 
    }    
  }



  async function searchcomment() {
    try {
      await searchcontent(searchval);
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await addcontent(link, title, description, linktype)
      setadding(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(contentId: string) {
    try {
      await deletecontent(contentId);
    } catch (error) {
      console.log(error)
    }
  }

  const getcon = async () => {
    try {
      await getcontent();
    } catch (err: unknown) {
      console.error("Failed to fetch content", err);
    }
  };

  useEffect(() => {
    if (searchval.trim() === "") {
      getcon();
    } else {
      searchcomment();
    }
  }, [searchval]);

  function onadding() {
    setadding(true);
  }

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-white">

      {/* HEADER */}
      <header className="w-full flex flex-col gap-4 border-b border-slate-200 bg-white/80 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
            src="https://image.freepik.com/free-vector/creative-brain-set-icons_24877-655.jpg"
            alt="Memory Saver logo"
          />
          <h1 className="text-xl font-semibold tracking-tight text-slate-800 sm:text-2xl lg:text-3xl">
            Memory Saver
          </h1>
        </div>

        {/* Search */}
        <div className="flex w-full items-center gap-2 rounded-full border-2 border-sky-400 bg-white px-4 py-2 shadow-sm focus-within:border-sky-500 lg:w-80">
          <SearchIcon size="md" />
          <input
            className="w-full min-w-0 border-none bg-transparent text-sm outline-none placeholder:text-slate-400 sm:text-base"
            placeholder="Search your saved links"
            value={searchval}
            onChange={(e) => setsearchval(e.target.value)}
            type="text"
            aria-label="Search"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button
            variant="primary"
            size="md"
            text="Add Comment"
            startIcon={<Plusicon size="md" />}
            onClick={onadding}
          />

          <Button
            variant="primary"
            size="md"
            text="share link"
            startIcon={<Shareicon size="md" />}
            onClick={() => console.log("done done")}
          />

          <Button
            variant="primary"
            size="md"
            text="chat"
            startIcon={<MessageIcon size="md" />}
            onClick={() => navigate("/chat")}
          />

            <Button
            variant="primary"
            size="md"
            text="Logout"
            startIcon={<LogoutIcon size="md" />}
            onClick={() => 
              logoutuser()
            }
          />


        
        </div>
      </header>

      {/* FORM MODAL */}
      {adding && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 flex flex-col gap-4 max-h-[90vh] overflow-y-auto">

            <h1 className="text-center text-2xl font-semibold text-slate-800 sm:text-3xl">
              Enter details
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Enter title"
                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={title}
                onChange={(e) => setitle(e.target.value)}
              />

              <input
                type="url"
                placeholder="Enter link"
                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={link}
                onChange={(e) => setlink(e.target.value)}
                required
              />

              <select
                className="w-full rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={linktype}
                onChange={(e) =>
                  setLinktype(e.target.value as any)
                }
              >
                <option value="twitter">Twitter</option>
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="other">Other</option>
              </select>

              <textarea
                placeholder="Enter description"
                rows={3}
                className="w-full resize-none rounded-lg border border-slate-300 p-2.5 text-sm outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setadding(false)}
                  className="flex-1 rounded-lg border border-slate-300 p-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-sky-500 p-2.5 text-sm font-medium text-white transition hover:bg-sky-600"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Sidebar */}
        <div className="w-16 shrink-0 overflow-y-auto sm:w-20 md:w-56 lg:w-64">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className="
            flex-1
            min-w-0
            overflow-y-auto
            overflow-x-hidden
            bg-gradient-to-br
            from-blue-50
            via-white
            to-purple-50
            p-3
            sm:p-4
            md:p-6
            lg:p-8
          "
        >
          {contentlinks.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-2 text-center text-slate-400">
              <p className="text-lg font-medium">No memories saved yet</p>
              <p className="text-sm">Use “Add Comment” to save your first link.</p>
            </div>
          ) : (
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                sm:gap-6
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
              "
            >
              {contentlinks.map((d) => (
                <Cards
                  key={d._id}
                  tittle={d.title || "No Title"}
                  link={new URL(d.link || "https://example.com")}
                  linktype={d.linktype || "other"}
                  description={d.description || "No Description"}
                  contentId={d._id || "Unknown"}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

export default Real;
