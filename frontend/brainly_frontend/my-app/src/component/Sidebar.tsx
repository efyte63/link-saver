
const Sidebar = () => {
  return (
   <div className="relative top-0 h-full w-full bg-gradient-to-b from-[#17141F] via-[#1B1830] to-[#100E19]">
      
      <div className="flex flex-row gap-2 p-2 sm:flex-col sm:gap-2.5 sm:p-3 md:p-4 md:pt-8">

       <div className="flex w-full">

        {/* Mobile only */}
        <div className="group flex sm:hidden h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#38BDF8]/25 to-[#38BDF8]/5 ring-1 ring-[#38BDF8]/30 transition active:scale-95">
        <img 
        className="h-7 w-7 rounded-full object-cover ring-2 ring-[#38BDF8]/50"
        src="https://imgs.search.brave.com/TlE92D20YmvVKSqUdGHBFVWKTol-loshyE47mKrg1Wg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L2ZyZWUtdmVjdG9y/L3R3aXR0ZXItYXBw/LW5ldy1sb2dvLXgt/YmxhY2stYmFja2dy/b3VuZF8xMDE3LTQ1/NDI1LmpwZz9zZW10/PWFpc190ZXN0X2Im/dz03NDAmcT04MA" alt="Twitter" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[52px] w-full items-center gap-3 rounded-xl border-l-4 border-transparent pl-4 text-sm md:text-base font-medium text-[#D9D4E6]
          transition-all duration-300 ease-in-out cursor-pointer
          hover:border-[#38BDF8] hover:bg-[#38BDF8]/10 hover:text-white hover:pl-5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#38BDF8]" />
          Twitter
        </p>

      </div>
        





        <div className="flex w-full">

        {/* Mobile only */}
        <div className="group flex sm:hidden h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#F87171]/25 to-[#F87171]/5 ring-1 ring-[#F87171]/30 transition active:scale-95">
           <img 
        className="h-7 w-7 rounded-full object-cover ring-2 ring-[#F87171]/50"
        src="https://imgs.search.brave.com/cSdH64Rog3rhIlXyhapl9C0rGquHj30GrRckvXCaM5I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3L2Yz/L2QzLzI3ZjNkMzAx/MmUyOTc5YjJiNWU5/YWRlOWIwOGM4YjIx/LmpwZw" alt="YouTube" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[52px] w-full items-center gap-3 rounded-xl border-l-4 border-transparent pl-4 text-sm md:text-base font-medium text-[#D9D4E6]
          transition-all duration-300 ease-in-out cursor-pointer
          hover:border-[#F87171] hover:bg-[#F87171]/10 hover:text-white hover:pl-5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#F87171]" />
          youtube
        </p>

      </div>





       
        <div className="flex w-full">

        {/* Mobile only */}
        <div className="group flex sm:hidden h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#E879F9]/25 to-[#F59E0B]/10 ring-1 ring-[#E879F9]/30 transition active:scale-95">
           <img 
        className="h-7 w-7 rounded-full object-cover ring-2 ring-[#E879F9]/50"
        src="https://imgs.search.brave.com/muBoIoOYbDCk_diYF8Ocp7AhT2aBsVp8P2ere2u8xhM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE3L2Ri/L2RlLzE3ZGJkZTIx/OWE5ZDI1NWFmYjU0/Y2UzNmExMmVhMTBk/LmpwZw" alt="Instagram" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[52px] w-full items-center gap-3 rounded-xl border-l-4 border-transparent pl-4 text-sm md:text-base font-medium text-[#D9D4E6]
          transition-all duration-300 ease-in-out cursor-pointer
          hover:border-[#E879F9] hover:bg-[#E879F9]/10 hover:text-white hover:pl-5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-[#E879F9] to-[#F59E0B]" />
          Instagram
        </p>

      </div>



       <div className="flex w-full">

        {/* Mobile only */}
        <div className="group flex sm:hidden h-14 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[#94A3B8]/25 to-[#94A3B8]/5 ring-1 ring-[#94A3B8]/30 transition active:scale-95">
           <img 
        className="h-7 w-7 rounded-full object-cover ring-2 ring-[#94A3B8]/50"
        src="https://imgs.search.brave.com/jJmDr5LnfpdC7WudMPhAlx2RTmQqaeZ5WasQI1vzSUk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy5mbGFtaW5ndGV4/dC5jb20vV29yZC1M/b2dvcy9vdGhlcnMt/ZGVzaWduLXBvd2Vy/LW5hbWUuZ2lm.jpeg" alt="Other" />
        </div>

        {/* Tablet/Desktop only */}
        <p
          className="hidden sm:flex h-[52px] w-full items-center gap-3 rounded-xl border-l-4 border-transparent pl-4 text-sm md:text-base font-medium text-[#D9D4E6]
          transition-all duration-300 ease-in-out cursor-pointer
          hover:border-[#94A3B8] hover:bg-[#94A3B8]/10 hover:text-white hover:pl-5"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#94A3B8]" />
          Other
        </p>

      </div>

      
        
        <div
        className="hidden sm:flex opacity-0">
          <p className="h-[52px] w-full items-center gap-3 rounded-xl pl-4 text-sm md:text-base font-medium flex text-[#D9D4E6]
          transition-all duration-300 ease-in-out">
          Other
        </p>

        </div>

      </div>
    </div>
  );
};

export default Sidebar;
