"use client"

import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import Loader from '@/components/Loader';
import Link from 'next/link'
import { useEffect, useState } from 'react';



export default function RoleView({ id }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
    }}

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`role/${id}`, config)
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
      setIsLoading(false)
  }, []);

  return (
    <> 
    { isLoading ? <Loader /> :
      <section className='w-[100%] h-auto bg-gray-50'>
          <div className="mx-auto w-[75%] py-[4rem]">
              {/* Title */}
              <div className="w-[100%] flex items-center justify-center flex-col">
                  <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                      View Role</h1>
                  <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
              </div>
              {/* ROW */}
              <div className='flex justify-end items-center pb-[2rem] '>
                  <Link
                        href={`/admin/role/edit/${id}`}
                        className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                        Edit</Link>
              </div>
              {/*  */}
              <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                  <label className='w-[20%] gap-3 font-semibold'>Name:</label>
                  <div className='w-[80%]'>
                      {data.name} </div>
              </div>
              <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                  <label className='w-[20%] gap-3 font-semibold'>Level:</label>
                  <div className='w-[80%]'>
                    {data.level}
                  </div>
              </div>
              <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                  <label className='w-[20%] gap-3 font-semibold'>Description:</label>
                  <div className='w-[80%]'>
                      {data.description}
                  </div>
              </div>
              <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                  <label className='w-[20%] gap-3 font-semibold'>Author:</label>
                  <div className='w-[80%]'>
                    { data.user ? 
                      (data.user.first_name ? data.user.first_name : '') + ' ' + 
                      (data.user.last_name ? data.user.last_name : '') : 
                      'Not Defined.'
                    }
                  </div>
              </div>
            
          </div>
      </section>
    }
    </>
  )
}
