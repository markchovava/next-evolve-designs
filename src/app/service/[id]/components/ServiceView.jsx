"use client"
import { BsChevronRight } from "react-icons/bs";
import Link from 'next/link'
import { baseURL } from "@/api/baseURL";

export default async function ServiceView({ service }) {
    const serviceData = await JSON.parse(service.value)
    console.log(serviceData)
  return (
    <>
        {/* PAGE TITLE */}
      <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
               {serviceData.data?.name}</h1>
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
                <Link href='#'>
                  Services</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/service/architectural' className='font-semibold'>
                    {serviceData.data?.name}</Link>
              </li>
            </ul>
        </div>
      </section>

    
      {/* SECTION */}
      <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex items-center justify-start">
            <div className="w-[50%]">
              <h3 className="text-[3rem] font-extrabold leading-none pb-[1.5rem]">
                Our {serviceData.data?.name} Services</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem]">
                {serviceData.data?.description}
              </p>
             
            </div>
            <div className="w-[50%]">
              <div className="w-[100%] rounded-xl aspect-[4/3] bg-slate-600 overflow-hidden">
                <img src={baseURL + serviceData.data?.thumbnail} className="w-[100%] h-[100%] object-fill" />
              </div>
            </div>
        </div>
      </section>


     
    { serviceData.data?.service_images &&
        <section className='w-[100%] h-auto'>
            <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
                <section className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {/* COL */}
                    {serviceData.data?.service_images.map(item => (
                        <div key={item} className='group h-[25rem] overflow-hidden relative flex items-end justify-center'>
                            <img src={baseURL + item.image} alt='' className='object-cover w-[100%] h-[100%] group-hover:scale-110 transition-all ease-in duration-200 ' />
                        </div>
                    ))}  
                </section>
            </div>
        </section>
    }
    </>
  )
}
