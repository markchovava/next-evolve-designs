import getAppInfo from "@/api/getAppInfo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSlider from "@/components/MainSlider";
import { BsArrowRight } from 'react-icons/bs'
import ServiceSection from "./components/ServiceSection";
import getServices from "@/api/getServices";
import getCategories from "@/api/getCategories";
import Link from "next/link";
import { getProjectsLatest } from "@/api/getProjects";
import ProjectSection from "./components/ProjectSection";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  const projectLatest = getProjectsLatest()
  const services = getServices()
  const appInfo = getAppInfo()
  const categories = getCategories()
  
  return (
   <>
      <Header appInfo={appInfo} services={services} categories={categories} />
      <MainSlider />
      {/* SECTION */}
      <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex lg:flex-row flex-col items-center justify-start">
            <div className="lg:w-[50%] w-[100%] pr-[1.5rem]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">Our Services</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                Evolve Designs is a prominent architectural firm
                specialising in modern, upmarket residential
                architecture, including townhouses, and
                commercial buildings such as offices and shopping
                centres. The firm comprises a highly skilled team
                that provides clients with designs that boast
                ‘Synergy, Boldness and Excellence’.
              </p>
              <p className="pb-[2rem]">
                It’s about design that lasts, where function
                meets art in a building that is both timeless and
                memorable.
              </p>
             {/*  <button 
                  className='group flex items-center justify-center gap-1 rounded-xl py-[1.5rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  View More <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
              </button> */}
            </div>
            <div className="lg:w-[50%] w-[100%]">
              <div className="w-[100%] rounded-xl aspect-[5/3] lg:aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src="/assets/img/segments/01.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
        </div>
      </section>
      {/* SERVICES */}
      <ServiceSection services={services} />

       {/* SECTION */}
       <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex lg:flex-row lg:gap-0 gap-3 flex-col items-center justify-start">
            <div className="lg:w-[50%]">
              <div className="w-[100%] rounded-xl aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src="/assets/img/segments/02.jpg" className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
            <div className="lg:w-[50%] w-[100%] lg:pl-[2rem]">
              <h3 className="text-[4rem] font-extrabold leading-none pb-[1.5rem]">Our Projects</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                With a strong focus on modern, contemporary architecture, this
                team and their architectural technologists, 3D visual artists, video
                animation artists, and interior designers work closely to deliver an
                exceptional, personalised service anywhere in Africa and worldwide.”
              </p>
              
            </div>
        </div>
      </section>


      {/* SERVICES */}
      <ProjectSection projectLatest={projectLatest} />

      
      {/* <Subscribe /> */}

     {/* FOOTER */}
    <Footer appInfo={appInfo} />

   </>
  )
}
