import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";

import Link from 'next/link'
import ContactForm from '@/components/ContactForm';
import Subscribe from '@/components/Subscribe';
import { GiWalkingBoot } from 'react-icons/gi';
import { GoTelescope } from 'react-icons/go';

export default function page() {
    return (
        <div>
          <Header />
    
          {/* PAGE TITLE */}
          <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
            <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
              <div className="flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
                    Architectural Project 1</h1>
                <hr className="border-t-4 border-white drop-shadow-xl w-[20%]" />
              </div>
            </div>
          </section>
    
          {/* BREADCRUMBS */}
          <section className='w-[100%] bg-slate-50'>
            <div className='mx-auto w-[90%]'>
                <ul className='py-2 flex items-center justify-start gap-2'>
                  <li className='flex gap-1 justify-start items-center'>
                    <Link href='/' className='flex justify-start items-center'>Home</Link> 
                  </li>
                  <li><BsChevronRight /></li>
                  <li className='flex justify-start items-center'>
                    <Link href='#' className='font-semibold'>
                      Projects</Link>
                  </li>
                  <li><BsChevronRight /></li>
                  <li className='flex justify-start items-center'>
                    <Link href='/project/construction' className='font-semibold'>
                    Architectural</Link>
                  </li>
                </ul>
            </div>
          </section>
    
          {/* SERVICES */}
          <section className='w-[100%] h-auto'>
            <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
              <div className="flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Project 1</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3rem]" />
              </div>
        
        <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-[3rem]'>
            {/* COL */}
            <div className='group col-span-3 h-[25rem] overflow-hidden relative flex items-end justify-center'>
                <img src='/assets/img/segments/01.jpg' alt='' className='w-[100%] h-[100%] object-cover group-hover:scale-110 transition-all ease-in duration-200 ' />
            </div >
            {/* COL */}
            <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
                <img src='/assets/img/segments/02.jpg' alt='' className='object-cover group-hover:scale-110 transition-all ease-in duration-200 ' />
            </div >
            {/* COL */}
            <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
                <img src='/assets/img/segments/03.jpg' alt='' className='object-cover group-hover:scale-110 transition-all ease-in duration-200 ' />
            </div >
            {/* COL */}
            <div className='group col-span-2 h-[25rem] overflow-hidden relative flex items-end justify-center'>
                <img src='/assets/img/segments/04.jpg' alt='' className='w-[100%] h-[100%] object-cover  group-hover:scale-110 transition-all ease-in duration-200 ' />
            </div >
            {/* COL */}
            <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
                <img src='/assets/img/segments/05.jpg' alt='' className='object-cover group-hover:scale-110 transition-all ease-in duration-200 ' />
            </div >
        </section>

        
        
        </div>
        </section>

        <section className='bg-slate-50 w-[100%] h-auto '>
          <div className='mx-auto w-[90%] h-[100%] py-[5rem] flex items-start justify-center gap-4'>
            <div className='w-[30%]'>
              <h1 className='pl-[1.5rem] font-bold text-[4rem] pb-[2rem] leading-tight'>About the project</h1>
            </div>

            <div className='border-l border-slate-200 px-[1.5rem] flex-1 flex flex-col items-start justify-start gap-4'>
                <h2 className='font-bold text-5xl'>Our Mission Statement</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae amet voluptatum voluptatem dicta 
                  labore soluta. Magnam fugiat quos accusamus maxime voluptatum, eveniet eligendi totam dolor 
                  quaerat molestias. Nobis quos facilis optio iure. Tenetur delectus dicta aperiam repellat ut 
                  asperiores vitae! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae amet voluptatum 
                  voluptatem dicta labore soluta. Magnam fugiat quos accusamus maxime voluptatum, eveniet eligendi 
                  totam dolor quaerat molestias. Nobis quos facilis optio iure. Tenetur delectus dicta aperiam repellat ut 
                  asperiores vitae!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae amet voluptatum voluptatem dicta 
                  labore soluta. Magnam fugiat quos accusamus maxime voluptatum, eveniet eligendi totam dolor 
                  quaerat molestias. Nobis quos facilis optio iure. Tenetur delectus dicta aperiam repellat ut 
                  asperiores vitae!
                </p>
            </div>
          </div>
          
      </section>
        
        {/* SUBSCRIBE */}
        <Subscribe />
    
          <ContactForm />
    
          <Footer />
        </div>
      )
}
