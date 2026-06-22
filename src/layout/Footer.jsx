import React from 'react'
import Logo from '../assets/footerlogo.png'
import FooterHead from '../Component.jsx/FooterHead'
import FooterPera from '../Component.jsx/FooterPera'
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";




function Footer() {
  return (
   <section className='bg-black'>
    <div className="pt-10 pb-6 md:pt-[82px] md:pb-[56px] md:px-20 px-4">
        <div className="grid grid-cols-12 gap-y-8">

            <div className="col-span-12 md:col-span-4">
                <div className="w-[300px] ">
                    <img src={Logo} alt="" className='object-cover -top-[300px]'/>
                </div>
            </div>
            <div className="col-span-12 md:col-span-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="">
                        <FooterHead text="Home"/>
                        <div className="flex flex-col mt-5 gap-y-2">
                            <FooterPera items="Become Affiliate"/>
                            <FooterPera items="Go Unlimited"/>
                            <FooterPera items="Services"/>
                        </div>
                    </div>
                    <div className="">
                        <FooterHead text="Products"/>
                        <div className="flex flex-col mt-5 gap-y-2">
                            <FooterPera items="Design Systems"/>
                            <FooterPera items="Themes & Templates"/>
                            <FooterPera items="Mockups"/>
                            <FooterPera items="Presentations"/>
                            <FooterPera items="Wireframes Kits"/>
                            <FooterPera items="UI Kits"/>
                        </div>
                    </div>

                    <div className="">
                        <FooterHead text="Legals"/>
                        <div className="flex flex-col mt-5 gap-y-2">
                            <FooterPera items="License"/>
                            <FooterPera items="Refund Policy"/>
                            <FooterPera items="About Us"/>
                            <FooterPera items="Contacts"/>
                            
                        </div>
                    </div>

                     <div className="">
                        <FooterHead text="Blog"/>
                        <div className="flex flex-col mt-5 gap-y-2">
                            <FooterPera items="Business Stories"/>
                            <FooterPera items="Digital Store"/>
                            <FooterPera items="ALearning"/>
                            <FooterPera items="Social Media"/>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div className="md:px-20 px-4">
        <div className=" border-t border-[#C4C4C4] flex justify-between items-center py-9">
        <p className='text-sm md:text-[18px] text-white/90 font-inter font-medium tracking-[-0.3px]'>Copyright Degic © 2020</p>

        <div className="flex gap-x-3 items-center">
            <div className="flex justify-center items-center bg-[#C4C4C4] w-[30px]  md:w-[50px] h-[30px] md:h-[50px] bg-opacity-10 rounded-full">
              <BsFacebook className='text-white text-[20px] md:text-2xl' />

            </div>
            <div className="flex justify-center items-center bg-[#C4C4C4] w-[30px]  md:w-[50px] h-[30px] md:h-[50px] bg-opacity-10 rounded-full">
             <AiFillInstagram className='text-white text-[20px] md:text-2xl' />


            </div>
            <div className="flex justify-center items-center bg-[#C4C4C4] w-[30px]  md:w-[50px] h-[30px] md:h-[50px] bg-opacity-10 rounded-full">
             <GrTwitter className='text-white text-[20px] md:text-2xl' />


            </div>
        </div>
        </div>

    </div>

   </section>
  )
}

export default Footer