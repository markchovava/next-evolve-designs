"use client"

import AxiosClient from '@/api/axiosClient';
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
      const result = await AxiosClient.get(`category/${id}`, config)
        .then((response) => {
          setData(() => response.data.data)
          //console.log(response.data.data)   
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
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Category</h1>
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
                <Link href='/' >
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/category' >
                  Category</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
              <Link href={`/admin/category/${data.id}`} className='font-semibold'>
                  View Category</Link>
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
                    View Category</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            
            {/* ROW */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/category/edit/${data.id}`}
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      Edit</Link>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-start">
                <label className='w-[20%] gap-3 font-semibold'>Name:</label>
                <div className='w-[80%]'>
                    {data.name}</div>
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
                    (data.user.first_name ? data.user.first_name : data.user.email) + ' ' + 
                    (data.user.last_name ? data.user.last_name : '') : 
                    'Not Defined.'
                  } 
                </div>
            </div>
          
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
