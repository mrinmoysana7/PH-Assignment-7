import { FaFacebook, FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#2A5D4A] text-center text-[#DAD7CD] py-12 px-4">

      {/* BRAND */}
      <h1 className="text-4xl font-bold text-white">KeenKeeper</h1>

      {/* DESCRIPTION */}
      <p className="max-w-xl mx-auto mt-4 text-sm text-[#CFCAB8]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* SOCIAL TITLE */}
      <p className="mt-6 text-sm text-[#CFCAB8]">Social Links</p>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-4 mt-3">
        
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2A5D4A] hover:bg-[#E6E2D3] cursor-pointer">
           <FaFacebook />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2A5D4A] hover:bg-[#E6E2D3] cursor-pointer">
           <FaGithub />
        </div>

        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#2A5D4A] hover:bg-[#E6E2D3] cursor-pointer">
           <RiTwitterXLine />
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10 border-t border-[#3E7C66] pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#CFCAB8] max-w-5xl mx-auto">

        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <span className="hover:text-white cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer">Terms of Service</span>
          <span className="hover:text-white cursor-pointer">Cookies</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;