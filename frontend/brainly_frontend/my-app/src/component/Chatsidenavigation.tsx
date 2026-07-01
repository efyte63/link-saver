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
    <div className="w-64 h-screen bg-gray-900 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {allusers.map((d) => (
        <div
          key={d._id}
          onClick={() => {
            setcurrentuser(d._id);
            setselecteduser(d._id);
          }}
          className={`flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer transition duration-300 ${
            currentuser === d._id
              ? "bg-blue-600 shadow-lg"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold">
              {(d.username?.[0] || "U").toUpperCase()}
            </div>

            <span className="font-medium">{d.username}</span>
          </div>

          {onlineusers.includes(d._id) ? (
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          ) : (
            <div className="w-3 h-3 rounded-full bg-gray-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Chatsidenavigation;