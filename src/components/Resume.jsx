import React from 'react'
import { FaHandshakeSimple, FaCircleCheck } from "react-icons/fa6";
import { FaUser,  FaStar } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { IoArrowForwardCircleSharp } from "react-icons/io5";







const Resume = () => {
  return (
    <div className=" mx-40 mt-10 px-6 py-10 flex flex-col items-start text-[#0649E7] justify-center rounded-3xl">
      <h2 className="text-[#022183] px-20 text-2xl font-semibold">
        Resume Building & Coaching
      </h2>
      <div className="flex items-start justify-between w-full h-full mt-10 gap-8 px-36">
        <div className="flex flex-col items-start  justify-between p-4 text-[#0649E7] h-130  w-full border border-[#0649E7] rounded-[20px] gap-2">
           <div className="w-full  ">
               <h2 className=" font-bold text-lg">Resume Rebuild</h2>
           <p2 className="  text-[8px] py-2 ">Crafted for senior to VP-level professionals ready for their next big step.</p2>
           <h1 className=" font-bold text-3xl py-2">$1000<span className="text-lg">one time</span></h1>
           <hr className="border-t-2 border-[#BCBCBC] w-full px-2" />
           <ul className="text-[12px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>3× 30-min coaching </li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Focused on storytelling, not just formatting</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Analyst + full application team on Pacific hours</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Tailored to your target industry, company, or role</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Direct work with our co-founder (ex-Google, JP Morgan)</li>
                <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Executive coaching from UC Berkeley alum with 10+ yrs experience</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Resume Rebuild portfolio available upon request</li>
           </ul>
           </div>
           <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 mt-2 rounded-full flex items-center justify-self-end  ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
        </div>
        <div className="flex flex-col items-start  justify-between p-4 text-[#0649E7] h-130  w-full border border-[#0649E7] rounded-[20px] gap-4">
           <div className="w-full gap-4 ">
               <h2 className=" font-bold text-lg">Interview Prep</h2>
           <p2 className="  text-[8px] py-3 ">Two sessions to sharpen your story, confidence, and clarity — fast.</p2>
           <h1 className=" font-bold text-3xl py-3">$500<span className="text-lg">one time</span></h1>
           <hr className="border-t-2 border-[#BCBCBC] w-full px-2" />
           <ul className="text-[12px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>2× 45-min live coaching with our co-founder</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Real-time, practical feedback</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Build clarity, empathy & executive presence</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>For senior and leadership roles — technical & non-technical</li>
           </ul>
           </div>
           <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 mt-20 rounded-full flex items-center justify-self-end  ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
        </div>
      </div>
      <div className="mt-20 flex py-20  items-center justify-between rounded-[20px] bg-[#0649E7] px-4 w-full text-[#fefefe]">
         <h3 className="text-2xl w-30 ">STILL HAVE DOUBTS?</h3>
         <h1 className="text-5xl font-bold">Contact us</h1>
         <span className="text-6xl">< IoArrowForwardCircleSharp /></span>
      </div>
    </div>
  );
}

export default Resume