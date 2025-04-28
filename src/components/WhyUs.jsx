import React from 'react'
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaUser,  FaStar } from "react-icons/fa";




const WhyUs = () => {
  return (
    <div className="bg-[#EBF1FF] mx-30 my-10 px-3 py-10 flex flex-col items-start justify-center rounded-3xl">
      <h2 className="text-[#022183] px-10 text-2xl font-semibold">
        Why Choose Us?
      </h2>
      <div className="flex items-start justify-between w-full h-full mt-10 gap-16 px-20">
        <div className="flex flex-col items-start justify-center p-4 text-[#022183]  border border-[#022183] rounded-[20px] gap-4">
          <span className="text-3xl p-2" ><FaHandshakeSimple/></span>
          <h6 className=" font-bold mt-2 p-2"> Tried, Tested, Trusted</h6>
          <p2 className="text-[8px] text-[#022183] px-2">Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.</p2>
        </div>
        <div className="flex flex-col items-start justify-center p-4 text-[#022183]  border border-[#022183]  rounded-[20px] gap-4">
          <span className="text-3xl  p-2" ><FaUser/></span>
          <h6 className=" font-bold mt-2 p-2"> Real People, Real Help</h6>
          <p2 className="text-[8px] text-[#022183] px-2">A hands-on team that actually cares — guiding you through every twist in your career path.</p2>
        </div>
        <div className="flex flex-col items-start justify-center p-4 text-[#022183]  border border-[#022183] rounded-[20px] gap-4">
          <span className="text-3xl p-2 " ><FaStar/></span>
          <h6 className=" font-bold mt-2 p-2">Beat the line</h6>
          <p2 className="text-[8px] text-[#022183] px-2">We search, shortlist, and apply for you, so your name shows up first — every single day.</p2>
        </div>
      </div>
    </div>
  );
}

export default WhyUs