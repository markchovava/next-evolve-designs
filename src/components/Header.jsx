"use client"
import Link from "next/link";
import { MdPhoneIphone, MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import NavAdmin from "./NavAdmin";
import NavMain from "./NavMain";
import { tokenAuth } from "@/api/tokenAuth";



export default async function Header({ appInfo, services, categories }) {
  const { getAuthToken } = tokenAuth();
  const appInfoData = await JSON.parse(appInfo.value)
  const servicesData = await JSON.parse(services.value)
  const categoriesData = await JSON.parse(categories.value)
    
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
                  <MdPhoneIphone /> {appInfoData.data?.phone_number}
                  </li>
                  <li className='flex items-center justify-start gap-1'>
                  <MdOutlineMailOutline /> {appInfoData.data?.email}
                  </li>
              </ul>
              </div>
              {/* RIGHT */}
              <div >
              <ul className='flex items-center justify-start gap-2'>
                      <li><Link href={appInfoData.data?.facebook} ><FaFacebook className="hover:scale-110" /></Link></li>
                      <li><Link href={appInfoData.data?.twitter} ><FaSquareXTwitter className="hover:scale-110" /></Link></li>
                      <li><Link href={appInfoData.data?.instagram}><FaInstagramSquare className="hover:scale-110" /></Link></li>
                      <li><Link href={appInfoData.data?.whatsapp}><FaWhatsappSquare className="hover:scale-110" /></Link></li>
                </ul> 
              </div>
          </div>
          <hr className="mx-auto w-[90%] border-t border-slate-500" />
        </section>
        {/* NAVIGATION */}
        <NavMain servicesData={servicesData} appInfoData={appInfoData} categoriesData={categoriesData} />
    </div>
  )
}
