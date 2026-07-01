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
    <div className="w-full min-h-screen ">

      {/* HEADER */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 p-4">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            className="h-16 md:h-20 object-contain"
            src="https://image.freepik.com/free-vector/creative-brain-set-icons_24877-655.jpg"
            alt="Logo"
          />
          <h1 className="text-2xl md:text-4xl">Memory Saver</h1>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 w-full md:w-auto sm:w-auto">
          <SearchIcon size="md" />
          <input
            className="h-12 w-full md:w-[300px] rounded-full pl-5 border-4 border-sky-500"
            placeholder="Search"
            value={searchval}
            onChange={(e) => setsearchval(e.target.value)}
            type="text"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
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
      </div>

      {/* FORM MODAL */}
      {adding && (
        <div className="absolute z-40 fixed inset-0 bg-black/80 flex justify-center items-center p-4">

          <div className=" absolute bg-blue-500 w-full max-w-md p-6 rounded-xl flex flex-col gap-4">

           

            <h1 className="text-red-200 text-3xl md:text-4xl text-center">
              Enter details
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Enter title"
                className="border p-2 rounded w-full"
                value={title}
                onChange={(e) => setitle(e.target.value)}
              />

              <input
                type="url"
                placeholder="Enter link"
                className="border p-2 rounded w-full"
                value={link}
                onChange={(e) => setlink(e.target.value)}
                required
              />

              <select
                className="border p-2 rounded w-full"
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
                className="border p-2 rounded w-full"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
     <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <div className="w-16 sm:w-20 md:w-56 lg:w-64 flex-shrink-0">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div
    className="
      flex-1
      overflow-y-auto
      overflow-x-hidden
      bg-gradient-to-br
      from-blue-100
      via-white
      to-purple-100
      p-3
      sm:p-4
      md:p-6
      lg:p-8
    "
  >
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-4
        sm:gap-6
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
  </div>
</div>

    </div>
  );
}

export default Real;