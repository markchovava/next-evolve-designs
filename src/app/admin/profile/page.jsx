"use client"
import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";


const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}


export default function page() {
  const [data, setData] = useState({})
  const [image, setImage] = useState({})

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`profile/`, config)
        .then((response) => {
          setData(response.data.data)
          response.data.data.image && setImage(baseURL + response.data.data.image)
        
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
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Profile</h1>
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
                <Link href='/admin/profile' className=''>
                  Profile</Link>
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
                    View Profile</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/profile/edit'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      Edit Profile</Link>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Image:</label>
                <div className='w-[80%]'>
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={image} className='absolute z-20 w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Full Name:</label>
                <div className='w-[80%]'>{`${data.first_name} ${data.last_name}`}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Phone Number:</label>
                <div className='w-[80%]'>{data.phone_number}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Email:</label>
                <div className='w-[80%]'>{data.email}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Address:</label>
                <div className='w-[80%]'>{data.address}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Profession:</label>
                <div className='w-[80%]'>{data.profession}</div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Bio:</label>
                <div className='w-[80%]'>
                    {data.bio}
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
