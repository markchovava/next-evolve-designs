 import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsChevronRight } from "react-icons/bs";
import Link from 'next/link'
import { PiTargetBold } from "react-icons/pi";
import { GoTelescope } from "react-icons/go";
import { FaRegHandshake } from "react-icons/fa";
import { GiWalkingBoot } from "react-icons/gi";
import Team from './components/Team';
import getAppInfo from '@/api/getAppInfo';
import getServices from '@/api/getServices';
import getCategories from '@/api/getCategories';
import getUsers from '@/api/getUsers';



export default async function page() {
  const users = getUsers();
  const categories = getCategories()
  const appInfo = getAppInfo()
  const services = getServices()
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories}/>

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
        <div className="mx-auto w-[90%] py-[4rem] flex lg:flex-row flex-col lg:gap-1 gap-5 items-center justify-start">
            <div className="lg:w-[55%] w-[100%] lg:pr-[2rem]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">About Us</h3>
              <hr className="border-t-4 border-black w-[20%] pb-[2rem]" />
              <p className="pb-[1.5rem]">
                Evolve Designs is a prominent architectural firm
                specialising in modern, upmarket residential
                architecture, including townhouses, and
                commercial buildings such as offices and shopping
                centres. The firm comprises a highly skilled team
                that provides clients with designs that boast
                ‘Synergy, Boldness and Excellence’.
                
              </p>
              <p className="">
                It’s about design that lasts, where function
                meets art in a building that is both timeless and
                memorable.
                SBE Africa believes design must first fulfill the
                functional requirements of its clients, be technically
                sound, innovative and always push the envelope.
              </p>
              
            </div>
            <div className="lg:w-[45%] w-[100%]">
              <div className="w-[100%] rounded-xl aspect-[5/4] overflow-hidden bg-slate-600">
               <img src="/assets/img/segments/02.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
              
            </div>
        </div>
      </section>

     {/* COMPANY INTEGRITY */}
     <section style={{ backgroundImage: `url('/assets/img/parallax/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto text-white'>
          <div className='mx-auto w-[90%] h-[100%] py-[5rem] flex lg:flex-row flex-col items-start justify-center gap-4'>
              <div className='flex-1'>
                <hr className='ml-[1.5rem] border-t-8 border-slate-100 w-[20%]' />
                <h1 className='pl-[1.5rem] font-bold text-[4rem] py-[2rem] leading-tight'>Why Choose Us?</h1>
              </div>
              <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                  <GiWalkingBoot className='text-[3rem]' />
                  <h2 className='font-semibold text-4xl'>Our Mission Statement</h2>
                  <p>
                    Constant pursuit of excellence,
                    we are focused on understanding our
                    clients’ needs, translating them into
                    compelling designs that draw the eye,
                    while incorporating the very best of
                    smart technologies to provide effortless,
                    comfortable, and stylish living.
                  </p>
              </div>
              <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                  <GoTelescope className='text-[3rem]' />
                  <h2 className='font-semibold text-4xl'>Our Vision</h2>
                  <p>
                    Constant pursuit of excellence,
                    we are focused on understanding our
                    clients’ needs, translating them into
                    compelling designs that draw the eye,
                    while incorporating the very best of
                    smart technologies to provide effortless,
                    comfortable, and stylish living.
                  </p>
              </div>
          </div>
          {/*  */}
          <div className='mx-auto max-w-7xl h-[100%] pb-[5rem]  flex lg:flex-row flex-col items-start justify-center gap-4'>
            <div className='lg:flex-1'>
              {/* Left Empty */}
            </div>
            <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <PiTargetBold className='text-[3rem] ' />
                <h2 className='font-semibold text-4xl'>Our Goals</h2>
                <p>
                  Constant pursuit of excellence,
                  we are focused on understanding our
                  clients’ needs, translating them into
                  compelling designs that draw the eye,
                  while incorporating the very best of
                  smart technologies to provide effortless,
                  comfortable, and stylish living.
                </p>
            </div>
            <div className='border-l border-slate-100 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <FaRegHandshake className='text-[3rem]' />
                <h2 className='font-semibold text-4xl'>Our Values</h2>
                <p>
                  Constant pursuit of excellence,
                  we are focused on understanding our
                  clients’ needs, translating them into
                  compelling designs that draw the eye,
                  while incorporating the very best of
                  smart technologies to provide effortless,
                  comfortable, and stylish living.
                </p>
            </div>
          </div>
      </section>


      <Footer appInfo={appInfo} />
    </div>
  )
}
