"use client"
import { BsChevronRight } from "react-icons/bs";
import Link from 'next/link'
import { baseURL } from "@/api/baseURL";
import { useEffect, useState } from "react";
import axios from "axios";



export default async function ServiceView({ id, service }) {
  //const [data, setData] = useState({});
  console.log(service)
  const data = service

  /* GET SERVICES */
 /*  async function getData() {
    try{
    const result = await axios.get(`${baseURL}service/${id}`)
        .then((response) => {
          setData(response.data.data);
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    }   
  } 

  useEffect(() => {
    getData();
  }, []);
 */
  return (
    <>
      {/* PAGE TITLE */}
      <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem] text-white drop-shadow-xl">
               {data?.name}</h1>
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
                <Link href={`/service/${id}`} className='font-semibold'>
                    {data?.name}</Link>
              </li>
            </ul>
        </div>
      </section>
    
      {/* SECTION */}
      <section className='w-[100%] bg-[#403d36] text-white'>
        <div className="mx-auto w-[90%] py-[4rem] flex lg:flex-row flex-col items-center justify-start">
            <div className="lg:w-[50%] w-[100%]">
              <h3 className="text-[3rem] font-extrabold leading-none pb-[1.5rem]">
                Our {data?.name} Services</h3>
              <hr className="border-t-4 w-[20%] pb-[2rem]" />
              <p className="pb-[2rem] lg:pr-[1.5rem] text-lg">
                {data?.description}
              </p>
             
            </div>
            <div className="lg:w-[50%] w-[100%]">
              <div className="w-[100%] rounded-xl lg:aspect-[4/3] aspect-[5/3] bg-slate-600 overflow-hidden">
                <img src={baseURL + data?.thumbnail} className="w-[100%] h-[100%] object-cover" />
              </div>
            </div>
        </div>
      </section>

     
      { data?.service_images &&
          <section className='w-[100%] h-auto'>
              <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
                  <section className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'>
                      {/* COL */}
                      {data?.service_images.map(item => (
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
