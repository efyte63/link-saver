

const Sidebar = () => {
  return (
   <div className="relative top-0 h-[83vh] w-full md:bg-gradient-to-b from-[#1b1b1b] via-[#202020] to-[#0f0f0f] sm:bg-white">
      
      <div className="pt-10 flex flex-col gap-5">

       <div className="flex">

        {/* Mobile only */}
        <div className="block sm:hidden h-[10vh] w-full bg-green-200">
        <img 
        className="h-full w-full"
        src="https://imgs.search.brave.com/TlE92D20YmvVKSqUdGHBFVWKTol-loshyE47mKrg1Wg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L3R3aXR0ZXItYXBw/LW5ldy1sb2dvLXgt/YmxhY2stYmFja2dy/b3VuZF8xMDE3LTQ1/NDI1LmpwZz9zZW10/PWFpc190ZXN0X2Im/dz03NDAmcT04MA" alt="" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] md:w-[150px] text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Twitter
        </p>

      </div>
        





        <div className="flex">

        {/* Mobile only */}
        <div className="block sm:hidden h-[10vh] w-full bg-green-200">
           <img 
        className="h-full w-full"
        src="https://imgs.search.brave.com/cSdH64Rog3rhIlXyhapl9C0rGquHj30GrRckvXCaM5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3L2Yz/L2QzLzI3ZjNkMzAx/MmUyOTc5YjJiNWU5/YWRlOWIwOGM4YjIx/LmpwZw" alt="" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] md:w-[100px] text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          youtube
        </p>

      </div>





       
        <div className="flex">

        {/* Mobile only */}
        <div className="block sm:hidden h-[10vh] w-full bg-green-200">
           <img 
        className="h-full w-full"
        src="https://imgs.search.brave.com/muBoIoOYbDCk_diYF8Ocp7AhT2aBsVp8P2ere2u8xhM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE3L2Ri/L2RlLzE3ZGJkZTIx/OWE5ZDI1NWFmYjU0/Y2UzNmExMmVhMTBk/LmpwZw" alt="" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] md:w-[150px] text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Instagram
        </p>

      </div>



       <div className="flex">

        {/* Mobile only */}
        <div className="block sm:hidden h-[10vh] w-full bg-green-200">
           <img 
        className="h-full w-full"
        src="https://imgs.search.brave.com/jJmDr5LnfpdC7WudMPhAlx2RTmQqaeZ5WasQI1vzSUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy5mbGFtaW5ndGV4/dC5jb20vV29yZC1M/b2dvcy9vdGhlcnMt/ZGVzaWduLXBvd2Vy/LW5hbWUuZ2lm.jpeg" alt="" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] md:w-[100px] text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Other
        </p>

      </div>

      
        
        <div
        className="flex opacity-0">
          <p className="h-[50px] md:w-[100px] text-2xl flex justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:bg-gradient-to-r hover:from-orange-200 hover:via-red-200 hover:to-pink-300 hover:text-[#a80077]">
          Other
        </p>

        </div>

      </div>
    </div>
  );
};

export default Sidebar;