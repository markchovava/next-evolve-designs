 import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsChevronRight } from "react-icons/bs";
import { BsArrowRight } from 'react-icons/bs'
import { FaUserGraduate } from 'react-icons/fa'
import { GiFootTrip } from 'react-icons/gi'
import Link from 'next/link'
import { PiTargetBold } from "react-icons/pi";
import { GoTelescope } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { GiWalkingBoot } from "react-icons/gi";
import Team from './components/Team';



export default function page() {
  return (
    <div>
      <Header />

      {/* PAGE TITLE */}
       <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">About Us</h1>
            <hr className="border-t-4 border-white drop-shadow-xl w-[20%]" />
          </div>
        </div>
      </section>

      {/* BREADCRUMBS */}
      <section className='w-[100%] bg-slate-50'>
        <div className='mx-auto w-[90%]'>
            <ul className='py-2 flex items-center justify-start gap-2'>
              <li className='flex gap-1 justify-start items-center'>
                <Link href='' className='flex justify-start items-center'>Home</Link> 
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='' className='font-semibold'>
                  About Us</Link>
              </li>
            </ul>
        </div>
      </section>

      {/* SECTION */}
      <section className='w-[100%] text-[#403d36] '>
        <div className="mx-auto w-[90%] py-[4rem] flex items-center justify-start">
            <div className="w-[55%] pr-[2rem]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">About Us</h3>
              <hr className="border-t-4 border-black w-[20%] pb-[2rem]" />
              <p className="pb-[1.5rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur.
              </p>
              
            </div>
            <div className="w-[45%]">
              <div className="w-[100%] rounded-xl aspect-[5/4] overflow-hidden bg-slate-600">
               <img src="/assets/img/segments/02.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
              
            </div>
        </div>
      </section>

     {/* COMPANY INTEGRITY */}
     <section style={{ backgroundImage: `url('/assets/img/parallax/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto text-white'>
          <div className='mx-auto w-[90%] h-[100%] py-[5rem] flex items-start justify-center gap-4'>
            <div className='flex-1'>
              <hr className='ml-[1.5rem] border-t-8 border-slate-100 w-[20%]' />
              <h1 className='pl-[1.5rem] font-bold text-[4rem] py-[2rem] leading-tight'>Why Choose Us?</h1>
            </div>
            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <GiWalkingBoot className='text-[3rem]' />
                <h2 className='font-semibold text-4xl'>Our Mission Statement</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
            <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <GoTelescope className='text-[3rem]' />
                <h2 className='font-semibold text-4xl'>Our Vision</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
          </div>
          {/*  */}
          <div className='mx-auto max-w-7xl h-[100%] pb-[5rem]  flex items-start justify-center gap-4'>
            <div className='flex-1'>
              {/* Left Empty */}
            </div>
            <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <PiTargetBold className='text-[3rem] ' />
                <h2 className='font-semibold text-4xl'>Our Goals</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
            <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <FaRegHandshake className='text-[3rem]' />
                <h2 className='font-semibold text-4xl'>Our Values</h2>
                <p>
                  The International School of South Africa subscribes to the prestigious 
                  Cambridge International Examinations (CIE) – the gold standard in international education.
                </p>
            </div>
          </div>
      </section>


      <Team />

      <Footer />
    </div>
  )
}
