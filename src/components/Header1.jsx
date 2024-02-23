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



export default async function Header() {
  const { getAuthToken } = tokenAuth();
  const [appInfo, setAppInfo] = useState({});
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  /* GET APPINFO */
  async function getAppInfo() {
    try{
    const result = await axios.get(`${baseURL}app-info/`)
        .then((response) => {
          setAppInfo(response.data.data);
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    }   
  } 
  /* GET SERVICES */
  async function getServices() {
    try{
    const result = await axios.get(`${baseURL}service/`)
        .then((response) => {
          setServices(response.data.data);
          console.log('Services')
          console.log(response.data.data)
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    }   
  } 
  /* GET CATEGORY */
  async function getCategories() {
    try{
    const result = await axios.get(`${baseURL}category/`)
        .then((response) => {
          setCategories(response.data.data);
          console.log('Categories')
          console.log(response.data.data)
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    }   
  } 

  useEffect(() => {
    getAppInfo();
    getCategories();
    getServices();
  }, []);


    
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
