import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth.store";
import { messageStore } from "../store/message";

const Chatsidenavigation = () => {
  const { allusers, getallusers, onlineusers } = useAuthStore();
  const { setselecteduser } = messageStore();

  const [currentuser, setcurrentuser] = useState("");

  useEffect(() => {
    getallusers();
  }, []);

  return (
    <div className="w-full h-full md:w-72 lg:w-80 bg-gradient-to-b from-[#17141F] via-[#1B1830] to-[#100E19] text-white p-3 sm:p-4 overflow-y-auto">
      <h2 className="text-lg sm:text-xl font-serif font-semibold mb-4 px-1 text-white">
        Users
      </h2>

      <div className="flex flex-col gap-2">
        {allusers.map((d) => (
          <div
            key={d._id}
            onClick={() => {
              setcurrentuser(d._id);
              setselecteduser(d._id);
            }}
            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition duration-300 ${
              currentuser === d._id
                ? "bg-[#F2542D] shadow-lg"
                : "hover:bg-white/5"
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-base font-bold ${
                  currentuser === d._id ? "bg-white/20" : "bg-[#38BDF8]/20 text-[#38BDF8]"
                }`}
              >
                {(d.username?.[0] || "U").toUpperCase()}
              </div>

              <span className="font-medium truncate">{d.username}</span>
            </div>

            {onlineusers.includes(d._id) ? (
              <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-green-400" />
            ) : (
              <div className="w-2.5 h-2.5 shrink-0 rounded-full bg-gray-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatsidenavigation;
