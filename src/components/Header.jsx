"use client"
import Link from "next/link";
import { MdPhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import NavAdmin from "./NavAdmin";
import NavMain from "./NavMain";
import { tokenAuth } from "@/api/tokenAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "@/api/baseURL";
import useSWR from "swr";
import fetcherWeb from "@/swr/fetcherWeb";

 

export default async function Header() {
    const { getAuthToken } = tokenAuth();
    const { data: appData, error: appInfoError } = useSWR(`${baseURL}app-info`, fetcherWeb)
    const { data: serviceData, error: servicesError } = useSWR(`${baseURL}service`, fetcherWeb)
    const { data: categoryData, error: categoriesError } = useSWR(`${baseURL}category`, fetcherWeb)
    const appInfo = appData?.data;
    const services = serviceData?.data;
    const categories = categoryData?.data;




    
  return (
    <div>
        { getAuthToken() && <NavAdmin /> }
        {/* TOP */}
        <section className='w-[100%] bg-[#403d36] text-white'>
          <div className='mx-auto w-[90%] py-3 flex items-center justify-between '>
              {/* LEFT */}
              <div className=''>
              <ul className="flex items-center justify-start gap-3 text-sm">
                  <li className='flex items-center justify-start gap-1'>
                  <MdPhoneIphone /> {appInfo?.phone_number}
                  </li>
                  <li className='flex items-center justify-start gap-1'>
                  <MdOutlineMailOutline /> {appInfo?.email}
                  </li>
              </ul>
              </div>
              {/* RIGHT */}
              <div >
                <ul className='flex items-center justify-start gap-2'>
                    <li><Link href={appInfo?.facebook ? appInfo?.facebook : '#'} ><FaFacebook className="hover:scale-110" /></Link></li>
                    <li><Link href={appInfo?.twitter ? appInfo?.twitter : '#'} ><FaSquareXTwitter className="hover:scale-110" /></Link></li>
                    <li><Link href={appInfo?.instagram ? appInfo?.instagram : '#'}><FaInstagramSquare className="hover:scale-110" /></Link></li>
                    <li><Link href={appInfo?.whatsapp ? appInfo?.whatsapp : '#'}><FaWhatsappSquare className="hover:scale-110" /></Link></li>
                </ul>
              </div>
          </div>
          <hr className="mx-auto w-[90%] border-t border-slate-500" />
        </section>
        {/* NAVIGATION */}
        <NavMain servicesData={services && services} appInfoData={appInfo && appInfo} categoriesData={categories && categories} />
    </div>
  )
}
