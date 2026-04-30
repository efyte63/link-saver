import React from "react";

const Sidebar = () => {
  return (
   <div className="relative top-0 h-[83vh] w-[12vw] bg-gradient-to-b from-[#1b1b1b] via-[#202020] to-[#0f0f0f]">
      
      <div className="pt-10 flex flex-col gap-5">

        <p className="h-[50px] w-[150px] text-2xl flex justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:bg-gradient-to-r hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]">
          Twitter
        </p>

        <p className="h-[50px] w-[100px] text-2xl flex justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-rose-100 via-pink-100 to-fuchsia-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:bg-gradient-to-r hover:from-pink-200 hover:via-rose-200 hover:to-fuchsia-300 hover:text-[#a80077]">
          Youtube
        </p>

        <p className="h-[50px] w-[150px] text-2xl flex justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-emerald-100 via-teal-100 to-cyan-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:bg-gradient-to-r hover:from-teal-200 hover:via-emerald-200 hover:to-cyan-300 hover:text-[#a80077]">
          Instagram
        </p>

        <p className="h-[50px] w-[100px] text-2xl flex justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:bg-gradient-to-r hover:from-orange-200 hover:via-red-200 hover:to-pink-300 hover:text-[#a80077]">
          Other
        </p>

      </div>
    </div>
  );
};

export default Sidebar;