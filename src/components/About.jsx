import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa6";

import image from "../assets/profile.svg"
import image2 from "../assets/profilee.svg"

const About = () => {
  return (
    <section className="bg-gradient-to-b from-navy-900 via-navy-900 to-[#0649E7]   px-40 py-10">
      <div className=" flex items-start mt-18 px-20">
        <h3 className="text-2xl font-semibold text-[#EBF1FF]">About Us</h3>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center h-full gap-12 px-20">
        <div className="flex items-center justify-center gap-4">
          <div className="relative rounded-full w-full bg-white overflow-hidden">
               <img
              src={image2}
              alt="picture"
              className=" h-50 w-full flex items-center "
            />
            <span className="absolute -right-0.5 -bottom-0.5 z-50 rounded-full border border-[#fefefe] backdrop-blur-xs text-xl p-3">< FaLinkedinIn/></span>
          </div>
          <p2 className="text-[12px] text-white px-10 ">
            <span className="font-bold"> Ashwin</span> is the founder of
            mobiusengine.ai. He is an accomplished senior executive with over 20
            years of experience in cloud infrastructure and financial services.
            With over 2 decades of experience at Google and JP Morgan, Ashwin
            held various product and GTM roles. Ashwin is an MBA holder from
            Yale University. <br />
            <br />
            Ashwin's vision with Mobius is to give job seekers a significant
            advantage in securing the roles of their dreams.
          </p2>
        </div>
        <div className="flex items-center justify-center gap-4 ">
          <div className="rounded-full bg-white relative ">
            <img
              src={image}
              alt="picture"
              height={800}
              width={800}
              className="z-50 overflow-hidden"
            />
             <span className="absolute -right-0.5 -bottom-0.5 rounded-full border border-[#fefefe] backdrop-blur-xs text-xl p-3">< FaLinkedinIn/></span>
          </div>
          <p2 className="text-[12px] text-white px-10">
            <span className="font-bold">Nicole</span> is an Executive coach at
            Mobius specializing in resume builds and career advisory.
            <br />
            <br />
            With a B.S. in Business Administration from UC Berkeley and 7+ years
            of experience in AI-driven product strategy, she has seen firsthand
            how the proper positioning opens doors. She takes a targeted,
            results-driven approach to help clients confidently stand out and
            land roles that truly match their skills and potential.
          </p2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  mt-8 gap-2 ">
        <a className="text-[12px] text-white flex items-center">
          Learn more about our Board of Advisors
          <GoArrowUpRight />
        </a>
        <a className="text-[12px] text-white flex items-center  ">
          Follow us on our Linkedin page <GoArrowUpRight />
        </a>
      </div>
    </section>
  );}

export default About