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
    <div className="w-full h-screen flex flex-col overflow-hidden bg-[#FBF7EF]">

      {/* HEADER */}
      <header className="w-full flex flex-col gap-4 border-b border-[#E7DFCB] bg-[#FBF7EF]/90 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="h-11 w-11 sm:h-14 sm:w-14 rounded-full ring-2 ring-[#F2542D]/30 overflow-hidden shadow-sm">
            <img
              className="h-full w-full object-cover"
              src="https://image.freepik.com/free-vector/creative-brain-set-icons_24877-655.jpg"
              alt="Memory Saver logo"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#1F1B16]">
              Memory Saver
            </h1>
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A79A7E]">
              your saved thoughts, organized
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="flex w-full items-center gap-2 rounded-full border border-[#E7DFCB] bg-white px-4 py-2.5 shadow-sm transition focus-within:border-[#F2542D] focus-within:ring-1 focus-within:ring-[#F2542D] lg:w-80">
          <SearchIcon size="md" />
          <input
            className="w-full min-w-0 border-none bg-transparent text-sm outline-none placeholder:text-[#B9AD8F] sm:text-base"
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

          <span className="hidden sm:block h-8 w-px bg-[#E7DFCB]" />

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
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#1F1B16]/60 p-4 backdrop-blur-sm">

          <div className="relative w-full max-w-md rounded-2xl bg-[#FFFDF8] p-6 sm:p-7 shadow-2xl ring-1 ring-[#E7DFCB] flex flex-col gap-5 max-h-[90vh] overflow-y-auto">

            <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-[#F2542D] via-[#F2A93A] to-[#F2542D]" />

            <div className="text-center">
              <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F1B16]">
                Enter details
              </h1>
              <p className="mt-1 text-sm text-[#A79A7E]">Save something worth remembering</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-[#A79A7E]">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full rounded-xl border border-[#E7DFCB] bg-white p-2.5 text-sm text-[#1F1B16] outline-none transition focus:border-[#F2542D] focus:ring-1 focus:ring-[#F2542D]"
                  value={title}
                  onChange={(e) => setitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-[#A79A7E]">Link</label>
                <input
                  type="url"
                  placeholder="Enter link"
                  className="w-full rounded-xl border border-[#E7DFCB] bg-white p-2.5 text-sm text-[#1F1B16] outline-none transition focus:border-[#F2542D] focus:ring-1 focus:ring-[#F2542D]"
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-[#A79A7E]">Type</label>
                <select
                  className="w-full rounded-xl border border-[#E7DFCB] bg-white p-2.5 text-sm text-[#1F1B16] outline-none transition focus:border-[#F2542D] focus:ring-1 focus:ring-[#F2542D]"
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
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-wide text-[#A79A7E]">Description</label>
                <textarea
                  placeholder="Enter description"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-[#E7DFCB] bg-white p-2.5 text-sm text-[#1F1B16] outline-none transition focus:border-[#F2542D] focus:ring-1 focus:ring-[#F2542D]"
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setadding(false)}
                  className="flex-1 rounded-xl border border-[#E7DFCB] p-2.5 text-sm font-medium text-[#7A6F58] transition hover:bg-[#F5EFE1]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[#F2542D] p-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#D9451F] hover:shadow-md"
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
            bg-[radial-gradient(circle_at_1px_1px,#EFE7D2_1px,transparent_0)]
            [background-size:22px_22px]
            bg-[#FBF7EF]
            p-3
            sm:p-4
            md:p-6
            lg:p-8
          "
        >
          {contentlinks.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-[#E7DFCB] bg-[#FFFDF8]/60 text-center">
              <p className="font-serif text-2xl text-[#1F1B16]">No memories saved yet</p>
              <p className="max-w-xs text-sm text-[#A79A7E]">
                Everything worth keeping starts here — save your first link to begin your archive.
              </p>
              <button
                onClick={onadding}
                className="mt-1 rounded-full bg-[#F2542D] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#D9451F] hover:shadow-md"
              >
                Add your first memory
              </button>
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
