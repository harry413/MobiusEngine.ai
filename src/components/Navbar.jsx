import React from 'react'
import logo from '../assets/logo.svg'
import { IoMdArrowDropdown } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-8">
      <div className="w-[180px] h-[50px] flex items-center cursor-pointer">
        <img src={logo} alt="Logo" className="w-full h-full" />
      </div>
      <div>
        <ul className="flex items-center gap-8 text-sm font-sans-serif font-medium">
          <li className="text-[#FEFEFE] cursor-pointer">Home</li>
          <li className="text-[#FEFEFE] cursor-pointer">About Us</li>
          <li className="text-[#FEFEFE] cursor-pointer">plans</li>
          <li className="text-[#FEFEFE] cursor-pointer">Testimonials</li>
          <li className="text-[#FEFEFE] cursor-pointer">Privacy Policy</li>
          <li className="text-[#FEFEFE] cursor-pointer flex items-center justify-center gap-1">
            More <IoMdArrowDropdown />
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-slate-200 text-blue-900 font-medium  px-6 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar