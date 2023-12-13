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
               Furniture & Fixture Selection</h1>
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
                  Services</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/service/architectural' className='font-semibold'>
                 Furniture & Fixture Selection</Link>
              </li>
            </ul>
        </div>
      </section>

    
      {/* SECTION */}
      <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex items-center justify-start">
            <div className="w-[50%]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">Our Furniture & Fixture Selection Services</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur.
              </p>
             
            </div>
            <div className="w-[50%]">
              <div className="w-[100%] rounded-xl aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src="/assets/img/segments/01.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
        </div>
      </section>


     

      <section className='w-[100%] h-auto'>
        <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
  
    <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2'>
        {/* COL */}
        <div className='group col-span-2 h-[25rem] overflow-hidden relative flex items-end justify-center'>
            <img src='/assets/img/segments/01.jpg' alt='' className='object-cover w-[100%] h-[100%] group-hover:scale-110 transition-all ease-in duration-200 ' />
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
        <div className='group col-span-2 h-[25rem] overflow-hidden relative flex items-end justify-center'>
            <img src='/assets/img/segments/05.jpg' alt='' className='object-cover w-[100%] h-[100%] group-hover:scale-110 transition-all ease-in duration-200 ' />
        </div >
    
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
