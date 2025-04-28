import React from 'react'

import Image from "../assets/image.svg"

import { GiBookmarklet } from "react-icons/gi";
import { PiArrowCircleDownLeftFill } from "react-icons/pi";

import { IoMdArrowForward } from "react-icons/io";



const Header = () => {
  return (
    <header className="flex items-center justify-center h-full w-full pl-40">
      <div className=" flex flex-col items-start justify-center w-1/2">
        <h1 className="text-5xl font-bold text-[#FEFEFE]">
          Land Job Interviews <span className="text-[#022183]">10x</span> faster
        </h1>
        <p className="mt-6 text-md text-[#EBF1FF] font-sora ">
          Custom-built resumes that match your goals, keywords, and recruiter
          expectations.
        </p>
        <button className="bg-slate-200 text-[#022183] text-semibold text-sm mt-8 px-6 py-2 rounded-full flex items-center justify-center ">
          Get Started
          <span className="text-[#022183]">
            <IoMdArrowForward />
          </span>
        </button>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center ">
        <div className="flex flex-col items-start justify-center relative">
          <img
            src={Image}
            alt="Hero"
            height={160}
            width={170}
            className=""
          />
          <div className="absolute bottom-4 -right-6 z-50 p-4 backdrop-blur-xs border border-[#fefefe] rounded-full">
            <GiBookmarklet className="text-4xl text-[#022183]"/>
            
          </div>
          <PiArrowCircleDownLeftFill className="relative -bottom-5 left-30 z-70 text-xl "/>
          <p2 className="text-[12px] text-[#EBF1FF]  mt-5">
            Download Free E-Book
          </p2>
        </div>
        
      </div>
    </header>
  );
}

export default Header