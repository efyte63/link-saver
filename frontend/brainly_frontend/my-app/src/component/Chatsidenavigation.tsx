import  { useEffect, useState } from 'react';
import { useAuthStore } from '../store/auth.store';
import { messageStore } from '../store/message';

const Chatsidenavigation = () => {
  const { allusers, getallusers, onlineusers } = useAuthStore();
  const [currentuser, setcurrentuser] = useState("");
  const {setselecteduser} = messageStore();

  useEffect(() => {
    getallusers();
  }, []);


   

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Users</h2>

      {allusers.map((d) => {
        return (
          <div
            key={d._id}
            onClick={() => {
            console.log("clicked");
            setcurrentuser(d._id);
              setselecteduser(d._id); // ✅ correct
          }}
            className="flex items-center justify-between p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-800 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                {(d.username?.[0] || "U").toUpperCase()}
              </div>
              <span className="font-medium">{d.username}</span>
            </div>

            {onlineusers.includes(d._id) ? (
              <span className="text-green-400 text-sm">●</span>
            ) : (
              <span className="text-gray-500 text-sm">●</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Chatsidenavigation;