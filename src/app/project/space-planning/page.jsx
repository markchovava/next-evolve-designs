import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";

import Link from 'next/link'
import ContactForm from '@/components/ContactForm';


export default function page() {
  return (
    <div>
      <Header />

      {/* PAGE TITLE */}
      <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
            Space Planning</h1>
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
                <Link href='#' className=''>
                  Projects</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/project/space-planning' className='font-semibold'>
                Space Planning</Link>
              </li>
            </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className='w-[100%] h-auto'>
        <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                Our Space Planning Projects</h1>
            <hr className="border-t-4 border-slate-900 w-[20%] pb-[3rem]" />
          </div>
          {/* Details */}
    <section className='w-[100%] pb-[2rem] flex items-center justify-between'>     
        <div className='flex gap-1 justify-start items-center text-xl font-semibold'>Page (1 of 5)</div>
        <section className='flex items-center justify-center gap-4 pb-[2rem]'>
            <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                Prev </button>
            <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                Next 
                <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
            </button>
        </section>
    </section>
    <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-[3rem]'>
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/01.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/02.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/03.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/04.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/05.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/01.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/05.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    {/* COL */}
    <div className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
        <img src='/assets/img/segments/01.jpg' alt='' className='object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
    </div >
    
    
    
    </section>
    {/* PAGINATION */}
    <section className='flex items-center justify-center gap-4 pb-[1rem]'>
        <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
            <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
            Prev </button>
        <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
            Next 
            <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
        </button>
    </section>
    </div>
    </section>
    
    {/* SUBSCRIBE */}
    <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto '>
        <div className='mx-auto w-[80%] py-[4rem]'>
            <label className='text-2xl italic text-white block pb-4'>
                Let us contact you, send us your email or phone number
            </label>
            <div className='w-[100%] flex justify-start items-center gap-4'>
                <input type='text' className='w-[85%] text-white py-5 px-3 rounded-lg outline-none bg-white/20 border border-white' />  
                <button 
                    className='w-[12%] group flex items-center justify-center gap-1 rounded-lg py-4 px-5 text-white border hover:bg-gradient-to-br drop-shadow-lg hover:from-gray-400 hover:to-slate-600'>
                    Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                </button>
            </div>
        </div>
    </section>

      <ContactForm />

      <Footer />
    </div>
  )
}
