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
       <section style={{backgroundImage: `url('/assets/img/parallax/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
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
              <p className="pb-[1.5rem] text-lg">
                Evolve Design Studio is a full turn-key Interior Design, Architectural design, Interior Decorating, 
                Exterior Landscaping Design Company, providing Project Management and Consultancy to both 
                residential and corporate markets. Based in Newlands Harare, we consult onsite or at our Design 
                Studio or alternatively at your site to get an immediate understanding of your needs.
                
              </p>
              <p className="text-lg">
                We have more than 5 years of experience in creating beautiful functional living spaces for some of the 
                most refined homeowners, corporates, hotels and complexes EVOLVE is renowned for its attention to detail, 
                meeting clients' needs & hands-on approach from design to execution. As a design studio, getting to know 
                our client is essential in helping them bring their vision to life.
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
              <div className='w-[30%]'>
                <hr className='ml-[1.5rem] border-t-8 border-slate-100 w-[20%]' />
                <h1 className='pl-[1.5rem] font-bold text-[4rem] py-[2rem] leading-tight'>Why Choose Us?</h1>
              </div>
              <div className='w-[70%] border-l border-slate-100 px-[1.5rem] flex flex-col items-start justify-start gap-4'>
                  <GoTelescope className='text-[3rem]' />
                  <h2 className='font-semibold text-4xl'>Our Vision</h2>
                  <p className='text-lg'>
                    We strive to pioneer design excellence: push the boundaries of creativity, setting new standards for quality and innovation.
                    Empower communities: Leverage design to uplift individuals and communities, promoting positive social change.
                    Celebrate African narratives: Showcase the richness and diversity of African cultures through impactful design.
                    Inspire future generations: Nurture young design talent, fostering a vibrant and thriving design ecosystem in Africa.
                    Lead by example: Uphold ethical and sustainable practices, setting a positive example for the design industry.
                    This vision statement emphasizes Evolve Design Studio's ambition to not only be the best design studio in Africa, 
                    but also to. Have a positive impact on the continent: By using design to empower communities, celebrate African narratives, and inspire future generations.
                    Be a leader in ethical and sustainable design: Setting a positive example for the industry.
                  </p>
              </div>
          </div>
          {/*  */}
          <div className='mx-auto w-[90%] h-[100%] py-[5rem] flex lg:flex-row flex-col items-start justify-center gap-4'>
            <div className='w-[30%]'>
              {/* Left Empty */}
            </div>
            <div className='w-[70%] border-l border-slate-100 px-[1.5rem] flex flex-col items-start justify-start gap-4'>
                <PiTargetBold className='text-[3rem] ' />
                <h2 className='font-semibold text-4xl'>Our Goals</h2>
                <p className='text-lg'>
                  What if you focused exclusively on the power of place to improve the everyday experience? This 
                  is the question we pose at the start of every project and which we answer by cross-pollinating 
                  learnings and ideas that connect different experiences and disciplines. Each place has its own 
                  story to tell, and as designers, we have the responsibility to convey that uniqueness. Ultimately, 
                  place has the power to transform, connect, and do good.
                  Evolve Design Studio envisions itself as the preeminent design force in Africa, shaping 
                  the continent's visual identity through innovative, impactful, and culturally-sensitive design solutions.
                </p>
            </div>
           
          </div>
      </section>


      <Footer appInfo={appInfo} />
    </div>
  )
}
