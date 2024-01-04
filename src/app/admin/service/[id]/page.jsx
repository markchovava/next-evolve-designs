"use client"

import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { BsChevronRight } from "react-icons/bs";


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function page({ params: {id} }) {
  const [data, setData] = useState({});

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`service/${id}`, config)
        .then((response) => {
          setData(() => response.data.data)
          console.log(response.data.data)   
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 

  useEffect(() => { 
      getData();
  }, []);

  return (
    <div>
       <Header />
       {/* PAGE TITLE */}
       <section style={{backgroundImage: `url('/assets/img/header/02.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Service</h1>
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
                <Link href='/' className=''>
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/service' className=''>
                  Service</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/service/1' className='font-semibold'>
                  View Service</Link>
              </li>
            </ul>
        </div>
      </section>

      {/* FORM */}
      <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    View Service</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/service/edit/1'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      Edit</Link>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Thumbnail Image:</label>
                <div className='w-[80%]'>
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={baseURL + data.thumbnail} className='absolute z-10 w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Name:</label>
                <div className='w-[80%]'>{data.name}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Description:</label>
                <div className='w-[80%]'>
                  {data.description}
                </div>
            </div>
            {/* ROW */}
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-start justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Images:</label>
                <div className='w-[80%] grid grid-cols-3 gap-4'>
                  { data.service_images ? 
                    data.service_images.map((item) => (
                      <div key={item.id} className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                          <img src={baseURL + item.image} className='absolute z-10 w-[100%] h-[100%] object-cover' />
                      </div>              
                    ))
                  :
                  <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                      <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>No Image added. </div>
                  </div>
                  }

                    
                </div>
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Updated At:</label>
                <div className='w-[80%]'>
                    {data.updated_at}
                </div>
            </div>
          
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
