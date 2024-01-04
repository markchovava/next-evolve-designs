"use client"
import { getToken } from "@/api/token";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import { BsArrowRight } from 'react-icons/bs'


export default function Home() {

 
  
  return (
   <>
      <Header />
      <MainSlider />
      {/* SECTION */}
      <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex items-center justify-start">
            <div className="w-[50%]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">Our Projects</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur.
              </p>
              <button 
                  className='group flex items-center justify-center gap-1 rounded-xl py-[1.5rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  View More <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
              </button>
            </div>
            <div className="w-[50%]">
              <div className="w-[100%] rounded-xl aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src="/assets/img/segments/01.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className='w-[100%] h-auto bg-slate-50'>
        <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem]">Our Services</h1>
            <hr className="border-t-4 border-slate-900 w-[20%] pb-[2rem]" />
          </div>
          <section className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-2'>
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/01.jpg')`}}>
              <div className='group-hover:opacity-0 transition-all duration-300 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Architectural</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Architectural</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Architectural<br /> designs.</p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div >
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/02.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Construction</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Construction</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Construction<br /> work.</p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/03.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Space Planning</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Space Planning</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Space Planning </p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/04.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Project Planning</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Project Planning</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Project Planning </p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div>
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/05.jpg')`}}>
              <div className='group-hover:opacity-0 transition-all duration-300 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Furniture & Fixture Selection</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Furniture & Fixture Selection</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Furniture & Fixture Selection</p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div >
            {/* COL */}
            <div className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
              style={{backgroundImage: `url('assets/img/segments/06.jpg')`}}>
              <div className='group-hover:opacity-0 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                Conceptualisation</div>
                <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                            absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                    <h4 className='font-bold text-2xl pb-2 drop-shadow-xl'>Conceptualisation</h4>
                    <p className='text-center pb-3 drop-shadow-xl'>Conceptualisation</p>
                    <button className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                      Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
                </div>
            </div>
            
            
          </section>
        </div>
      </section>
       {/* SECTION */}
       <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex items-center justify-start">
            <div className="w-[50%]">
              <div className="w-[100%] rounded-xl aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src="/assets/img/segments/02.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
            <div className="w-[50%] pl-[2rem]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">Our Projects</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Expedita voluptatum exercitationem tempora facilis magnam quisquam est, 
                veritatis cum eum tenetur.
              </p>
              <button 
                  className='group flex items-center justify-center gap-1 rounded-xl py-[1.5rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  View More <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
              </button>
            </div>
        </div>
      </section>
      {/* Contact Section */}
      <ContactForm />

     {/* FOOTER */}
     <Footer />

   </>
  )
}
