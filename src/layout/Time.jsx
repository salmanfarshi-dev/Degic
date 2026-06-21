import React from "react";
import Subheading from "../Component.jsx/Subheading";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import Timeimageone from '../assets/time (1).png'
import Timeimagetwo from '../assets/time (2).png'

function Time() {
  return (
    <section className="px-4 md:px-20 pt-4 md:pt-[87px] pb-20 md:pb-[166px]">
      <div className="flex flex-col gap-y-10 md:gap-y-[126px]">
        <div className=" flex flex-col md:flex-row items-center mx-auto gap-x-[146px] gap-y-6 md:gap-y-0">
          <div className="">
            <img src={Timeimageone} alt="" className="md:w-full w-[300px]"/>

          </div>

          <div className="">
            <Subheading text="Make more time for the work" className="w-full md:w-[460px] 
            md:leading-[60px] md:tracking-[-2.5px]"/>
            <div className=" mt-6 flex flex-col py-2">
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black text-[16px] md:text-xl font-normal font-inter tracking-[-0.8px ] ">Many ways to use illustrations in design</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black text-[16px] md:text-xl font-normal font-inter tracking-[-0.8px ] ">Simply explained with illustrations</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black text-[16px] md:text-xl font-normal font-inter tracking-[-0.8px ] ">Make more time for the work</p>
              </div>
            </div>
          </div>
        </div>

      <div className=" flex flex-col-reverse md:flex-row items-center mx-auto gap-x-[146px]">
         

          <div className=" mt-4 md:mt-0">
            <Subheading text="Make more time for the work" className="w-full md:w-[460px] 
            md:leading-[60px] md:tracking-[-2.5px]"/>
            <div className=" mt-6 flex flex-col py-2">
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black md:text-xl font-normal font-inter tracking-[-0.8px ]">Many ways to use illustrations in design</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black md:text-xl font-normal font-inter tracking-[-0.8px ]">Simply explained with illustrations</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="">
                 <HiOutlineCheckCircle className="text-[#2AB691]" />

                </div>
                <p className="text-black md:text-xl font-normal font-inter tracking-[-0.8px ]">Make more time for the work</p>
              </div>
            </div>
          </div>

           <div className="">
            <img src={Timeimagetwo} alt="" className="w-[300px] md:w-full"/>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Time;
