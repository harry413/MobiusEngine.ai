import React from 'react'
import logo from "../assets/logoblue.svg"
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";



const Footer = () => {
  return (
   <section className="bg-[#fefefe] flex flex-col items-start justify-center py-20 px-18 text-[#0649E7] w-full">
      <img src={logo} alt="Logo" className="py-6" height={80}  width={80}/>
       <hr className="border border-[#BCBCBC] w-60  " />
      <div className="flex items-center justify-between gap-2 mt-4 w-full">
        <div className="flex items-start justify-center px-10 gap-10">
               <div className="flex flex-col items-start justify-center gap-2 w-40">
                    <p className="font-semibold underline"> Address</p>
                    <a className="text-[12px]">1875 Mission St Ste 103 #450 San Francisco, CA 94103</a>
               </div>
               <div className="flex flex-col items-start justify-center gap-2">
                    <p className="font-semibold underline "> Email</p>
                    <a className="text-[12px]">finance@mobiusengine.ai</a>
               </div>
               <div className="flex flex-col items-start justify-center gap-2">
                    <p className="font-semibold underline">Telephone</p>
                    <a className="text-[12px]">650-889-6026</a>
               </div>
        </div>
           <div className="flex flex-col items-start justify-center gap-2">
                    <p className="font-semibold underline">Social</p>
                    <div className="flex items-center justify-center gap-2">
                         <span className="p-2 border border-[#0649E7] rounded-full"><FaLinkedinIn/></span>
                         <span className="p-2 border border-[#0649E7] rounded-full "><IoLogoGithub/></span>
                    </div>
          </div>
      
     </div>
     
   </section>
  )
}

export default Footer