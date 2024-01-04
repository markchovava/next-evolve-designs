"use client"
import { useState } from "react";
import Link from "next/link";
import { MdPhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagramSquare, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs'
import { FaLocationDot } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-[100%] h-auto bg-[#403d36] text-white">
    <div className="w-[90%] mx-auto py-[4rem] flex items-start justify-between">
        <div className="w-[20%] h-auto flex items-center justify-center flex-col gap-4">
            <img src="/assets/img/logo_small.jpg" className="object-fill" alt="" />
            <ul className='flex items-center justify-start gap-3 text-2xl'>
                <li><Link href='#' ><FaFacebook className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                <li><Link href='#'><FaSquareXTwitter className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                <li><Link href='#'><FaInstagramSquare className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                <li><Link href='#'><FaWhatsappSquare className="hover:scale-110 transition-all ease-in-out" /></Link></li>
            </ul>
        </div>
        <div className="">
            <h4 className="text-2xl font-extrabold mb-[1rem]">Navigation Links</h4>
            <ul className="text-sm pl-[1rem] flex flex-col justify-center items-start gap-2">
                <li>
                    <Link href='/about' className="group flex items-center justify-start gap-2">
                        <FaAngleRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        About Us</Link>
                </li>
                <li> 
                    <Link href='/project' className="group flex items-center justify-start gap-2">
                        <FaAngleRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        My Account</Link></li>
                <li> 
                    <Link href='/contact' className="group flex items-center justify-start gap-2">
                        <FaAngleRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        Contact Us</Link>
                </li>
                <li> 
                    <Link href='/register' className="group flex items-center justify-start gap-2">
                        <FaAngleRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        Register</Link></li>
                <li> 
                    <Link href='/login' className="group flex items-center justify-start gap-2">
                        <FaAngleRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        Login</Link></li>
            </ul>
        </div>
        <div className="w-[30%]">
            <h4 className="text-2xl font-extrabold mb-[1rem]">Contact Details</h4>
            <ul className="pl-3 flex flex-col gap-4 text-sm">
                <li className="flex items-start justify-start gap-3 ">
                    <FaLocationDot className="mt-1" />
                    <div>
                        <h6 className="font-bold">Address</h6>
                        04 - 85 Avenue, 
                        Mabelreign <br />
                        Harare 
                    </div>
                </li>
                <li className="flex items-start justify-start gap-3 ">
                    <MdPhoneIphone className="mt-1"  />
                    <div>
                        <h6 className="font-bold">Phone Number</h6>
                        +263 782 210021
                    </div>
                    </li>
                <li className="flex items-start justify-start gap-3 ">
                    <MdOutlineMailOutline className="mt-1" /> 
                    <div>
                        <h6 className="font-bold">Email</h6>
                        info@test.co.zw
                    </div>
                    </li>
            </ul>
        </div>
    </div>
  </section>
  )
}
