import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowForward } from "react-icons/io";

const Client = () => {
  return (
    <section className="bg-[#fefefe] px-30 py-20 flex flex-col items-start justify-center w-full">
      <h2 className="text-[#0649E7] px-30 text-2xl font-semibold">
        What out clients have to say
      </h2>
      <div className="flex items-start justify-between w-full h-full mt-16 gap-12 px-30">
        <div className="flex flex-col items-end justify-center gap-4 bg-[#0649E7] rounded-[20px] border w-1/3 h-full  border-[#0649E7] ">
          <div className="rounded-[20px] flex items-center justify-center p-12 bg-white w-full ">
            <span className="text-[#0649E7] text-3xl">
              <AiFillPlayCircle />
            </span>
          </div>
          <p2 className="text-[8px] pt-2 px-3">
            Holly is a <span className="font-bold">senior executive</span> who
            got over <span className="font-bold">10 job interviews</span> and an
            offer she accepted
          </p2>
          <span className=" text-3xl mr-3 mb-3">
            <BsArrowUpRightCircleFill />
          </span>
        </div>
        <div className="flex flex-col items-end justify-center gap-4 bg-[#0649E7] rounded-[20px] border w-1/3 h-full  border-[#0649E7] ">
          <div className="rounded-[20px] flex items-center justify-center p-12 bg-white w-full ">
            <span className="text-[#0649E7] text-3xl">
              <AiFillPlayCircle />
            </span>
          </div>
          <p2 className="text-[8px] pt-2 px-3">
            Holly is a <span className="font-bold">senior executive</span> who
            got over <span className="font-bold">10 job interviews</span> and an
            offer she accepted
          </p2>
          <span className=" text-3xl mr-3 mb-3">
            <BsArrowUpRightCircleFill />
          </span>
        </div>
        <div className="flex flex-col items-end justify-center gap-4 bg-[#0649E7] rounded-[20px] border w-1/3 h-full  border-[#0649E7] ">
          <div className="rounded-[20px] flex items-center justify-center p-12 bg-white w-full h-1/3 ">
            <span className="text-[#0649E7] text-3xl">
              <AiFillPlayCircle />
            </span>
          </div>
          <p2 className="text-[8px] pt-2 px-3">
            Holly is a <span className="font-bold">senior executive</span> who
            got over <span className="font-bold">10 job interviews</span> and an
            offer she accepted
          </p2>
          <span className=" text-3xl mr-3 mb-3">
            <BsArrowUpRightCircleFill />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 px-30 w-full gap-8">
        <button className="px-6 py-2 border border-[#0649E7] rounded-full text-sm flex items-center justify-center text-[#0649E7]">
          More customer testimonials <GoArrowUpRight />
        </button>
        <button className="bg-[#0649E7] text-[#fefefe] text-semibold text-sm px-6 py-2 rounded-full flex items-center justify-center ">
          Get Started
          <span className="text-[#fefefe]">
            <IoMdArrowForward />
          </span>
        </button>
      </div>
    </section>
  );
}

export default Client