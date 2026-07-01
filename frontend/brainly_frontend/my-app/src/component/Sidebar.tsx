
const Sidebar = () => {
  return (
   <div className="relative top-0 h-full w-full bg-gradient-to-b from-[#1b1b1b] via-[#202020] to-[#0f0f0f] sm:bg-white">
      
      <div className="flex gap-2 p-2 sm:flex-col sm:gap-3 sm:p-4 sm:pt-8">

       <div className="flex w-full">

        {/* Mobile only */}
        <div className="flex sm:hidden h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#242424]">
        <img 
        className="h-8 w-8 rounded-full object-cover"
        src="https://imgs.search.brave.com/TlE92D20YmvVKSqUdGHBFVWKTol-loshyE47mKrg1Wg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L3R3aXR0ZXItYXBw/LW5ldy1sb2dvLXgt/YmxhY2stYmFja2dy/b3VuZF8xMDE3LTQ1/NDI1LmpwZz9zZW10/PWFpc190ZXN0X2Im/dz03NDAmcT04MA" alt="Twitter" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] w-full md:w-[150px] text-lg md:text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100 rounded-lg cursor-pointer
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Twitter
        </p>

      </div>
        





        <div className="flex w-full">

        {/* Mobile only */}
        <div className="flex sm:hidden h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#242424]">
           <img 
        className="h-8 w-8 rounded-full object-cover"
        src="https://imgs.search.brave.com/cSdH64Rog3rhIlXyhapl9C0rGquHj30GrRckvXCaM5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3L2Yz/L2QzLzI3ZjNkMzAx/MmUyOTc5YjJiNWU5/YWRlOWIwOGM4YjIx/LmpwZw" alt="YouTube" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] w-full md:w-[150px] text-lg md:text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100 rounded-lg cursor-pointer
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          youtube
        </p>

      </div>





       
        <div className="flex w-full">

        {/* Mobile only */}
        <div className="flex sm:hidden h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#242424]">
           <img 
        className="h-8 w-8 rounded-full object-cover"
        src="https://imgs.search.brave.com/muBoIoOYbDCk_diYF8Ocp7AhT2aBsVp8P2ere2u8xhM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE3L2Ri/L2RlLzE3ZGJkZTIx/OWE5ZDI1NWFmYjU0/Y2UzNmExMmVhMTBk/LmpwZw" alt="Instagram" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] w-full md:w-[150px] text-lg md:text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100 rounded-lg cursor-pointer
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Instagram
        </p>

      </div>



       <div className="flex w-full">

        {/* Mobile only */}
        <div className="flex sm:hidden h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-[#242424]">
           <img 
        className="h-8 w-8 rounded-full object-cover"
        src="https://imgs.search.brave.com/jJmDr5LnfpdC7WudMPhAlx2RTmQqaeZ5WasQI1vzSUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy5mbGFtaW5ndGV4/dC5jb20vV29yZC1M/b2dvcy9vdGhlcnMt/ZGVzaWduLXBvd2Vy/LW5hbWUuZ2lm.jpeg" alt="Other" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[50px] w-full md:w-[150px] text-lg md:text-2xl justify-center items-center text-[#CA6180]
          bg-gradient-to-r from-sky-100 via-indigo-100 to-purple-100 rounded-lg cursor-pointer
          transition-all duration-300 ease-in-out
          hover:w-[200px] hover:from-indigo-200 hover:via-purple-200 hover:to-indigo-300 hover:text-[#a80077]"
        >
          Other
        </p>

      </div>

      
        
        <div
        className="hidden sm:flex opacity-0">
          <p className="h-[50px] w-full md:w-[100px] text-2xl flex justify-center items-center text-[#CA6180]
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
