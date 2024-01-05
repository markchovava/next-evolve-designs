"use client"

import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useEffect, useState } from 'react';


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function ProjectView({ id }) {
  const [data, setData] = useState({});

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`project/${id}`, config)
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
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    View Project</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            {/*  */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/project/edit/${id}`}
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

            {data.categories &&
              <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                  <label className='w-[20%] gap-3 font-semibold'>Categories:</label>
                  <div className='w-[80%] font-bold'>
                    {data.categories.map(item => (
                      `${item.name}, `
                    ))}
                  </div>
              </div>
            }
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-start justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Images:</label>
                <div className='w-[80%] grid grid-cols-3 gap-4'>
                  { data.project_images ? 
                    data.project_images.map((item) => (
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
  )
}
