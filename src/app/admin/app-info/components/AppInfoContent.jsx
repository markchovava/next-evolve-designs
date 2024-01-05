"use client"
import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useEffect, useState } from 'react';


const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${getToken()}`
  }}


export default function AppInfoContent() {
    const [data, setData] = useState({});
    const [image, setImage] = useState()
    
    /* GET DATA */
    async function getData() {
        try{
        const result = await AxiosClient.get(`app-info/`, config)
            .then((response) => {
            setData(() => response.data.data)
            response.data.data.image && setImage(baseURL + response.data.data.image);
            console.log(response.data.data)
            console.log(response.data.data.image)
            
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
                    View AppInfo</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>

            {/* ROW */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/app-info/edit'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      Edit</Link>
            </div>

            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Thumbnail Image:</label>
                <div className='w-[80%]'>
                    <div className='relative w-[15rem] h-[10rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={image} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Name:</label>
                <div className='w-[80%]'>
                    {data.name}</div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Phone Number:</label>
                <div className='w-[80%]'>
                  {data.phone_number}</div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Email:</label>
                <div className='w-[80%]'>
                  {data.email}
                </div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Address:</label>
                <div className='w-[80%]'>
                  {data.address}
                </div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Facebook:</label>
                <div className='w-[80%]'>
                    {data.facebook}</div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>WhatsApp:</label>
                <div className='w-[80%]'>
                  {data.whatsapp}</div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Instagram:</label>
                <div className='w-[80%]'>
                    {data.instagram}</div>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Twitter:</label>
                <div className='w-[80%]'>
                    {data.twitter}</div>
            </div>
        
           
          
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Author:</label>
                <div className='w-[80%] italic'>
                    { data.user && 
                      (data.user.first_name ? data.user.first_name : '' ) + ' ' + 
                      (data.user.last_name ? data.user.last_name : '') }
                </div>
            </div>
          
        </div>
      </section>
  )
}
