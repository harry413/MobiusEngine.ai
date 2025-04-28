import React from 'react'
import { FaHandshakeSimple, FaCircleCheck } from "react-icons/fa6";
import { FaUser,  FaStar } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";





const Service = () => {
  return (
    <div className=" mx-30 my-10 px-6 py-10 flex flex-col items-start text-[#0649E7] justify-center rounded-3xl">
      <h2 className="text-[#022183] px-20 text-2xl font-semibold">
        Job Application Service Plan
      </h2>
      <div className="flex items-start justify-between w-full h-full mt-10 gap-8 px-20">
        <div className="flex flex-col items-start  justify-between p-4 text-[#0649E7] h-130  w-full border border-[#0649E7] rounded-[20px] gap-4">
           <div className="w-full gap-4 ">
               <h2 className=" font-bold text-lg">April Promo</h2>
           <h1 className=" font-bold text-3xl py-3 ">$35<span className="text-lg">/week</span></h1>
           <hr className="border-t-2 border-[#BCBCBC] w-full px-2" />
           <ul className="text-[12px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Curated jobs from 1M+ listings, refreshed every 48 hours</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Need more? Add extra apps for just $1.5 each</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Your own dedicated application analyst</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Personalized with up to 10 filters & 5 job titles</li>
           </ul>
           </div>
           <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 mt-20 rounded-full flex items-center justify-self-end  ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
        </div>
        <div className="flex flex-col items-start  justify-between p-4 text-[#0649E7] h-130 w-full border border-[#0649E7] rounded-[20px] gap-4">
          <div className="w-full gap-4">
               <div className="flex items-center justify-between gap-18 ">
                <h2 className=" font-bold text-lg">Starter</h2>
                <p className="border rounded-full text-sm px-2 font-medium ">Popular</p>
          </div>
           <h1 className=" font-bold text-3xl py-3">$50<span className="text-lg">/week</span></h1>
           <hr className="border-t-2 border-[#BCBCBC] w-full px-2" />
           <ul className="text-[12px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2">All the perks of the Promo Plan, plus:</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Resume review & story-focused feedback</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Dedicated search specialist</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Up to 50 job apps/week</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Extra apps at $1.5 each</li>
                <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Analyst support within 6 hours (SLA/PST hours)</li>
           </ul>
          </div>
           <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 mt-20 rounded-full flex items-center justify-self-end ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
        </div>
        <div className="flex flex-col items-start  justify-between p-4 text-[#0649E7] h-130 w-full border border-[#0649E7] rounded-[20px] gap-4">
           <div className="w-full gap-4 ">
               <h2 className=" font-bold text-lg ">Plus</h2>
           <h1 className=" font-bold text-3xl py-3">$100<span className="text-lg">/week</span></h1>
           <hr className="border-t-2 border-[#BCBCBC] w-full px-2" />
           <ul className="text-[12px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2">Everything in Starter, with more muscle:</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Up to 75 apps/week</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Apply to 15 job titles</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Analyst + full application team on Pacific hours</li>
           </ul>
           </div>
           <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 mt-20 rounded-full flex items-center justify-self-end ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-between  justify-center rounded-[20px] bg-[#0649E7] p-4 w-full text-[#fefefe]">
          <div className="flex items-center justify-between px-4">
               <div className="flex flex-col items-start justify-center ">
                    <h3 className="font-bold text-2xl">Advance</h3>
                    <p2 className="text-[8px] ">Top-tier support for serious job hunters:</p2>
                </div>
                 <h1 className=" font-bold text-3xl py-3">$150<span className="text-lg">/week</span></h1>
          </div>
          <hr className="border-t-2 border-[#BCBCBC] w-40 px-4" />
          <div className="flex items-center justify-between px-4 text-[8px]">
               <ul className="text-[8px] flex flex-col items-start justify-center gap-2 font-semibold mt-4">
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Everything in Plus</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Custom Resumes & Cover Letters</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>20 fully customized applications/week</li>
               <li className="flex items-start justify-center gap-2"><span className="text-[#4AD257]"><FaCircleCheck/></span>Access to senior resume experts, Founder & Exec Coaches</li>
           </ul>
           <button className="bg-[#fefefe] text-[#0649E7] text-semibold text-sm px-6 py-2 mt-20 rounded-full flex items-center justify-center ">
          Get Started
          <span className="text-[#0649E7]">
            <IoMdArrowForward />
          </span>
        </button>
          </div>
      </div>
      <hr className="border border-[#BCBCBC] w-full mt-20" />
    </div>
  );
}

export default Service