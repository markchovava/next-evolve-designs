"use client"

import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function page() {
  const router = useRouter()
  const [data, setData] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`profile/`, config)
        .then((response) => {
          setData({ id: response.data.data.id })
        
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 

  /* SAVE DATA */
  async function postData() {
    setIsSubmit(false);
    try{
      const result = await AxiosClient.post(`password/`, data, config)
        .then((response) => {
          setData(() => response.data.data)
          router.push(`/admin/profile`)
        })
      } catch (error) {
        console.error(`Error: ${error}`)
    } 
  } 

  
  const handleSubmit = () => {
    if(data.password != data.password_confirmation){
      alert('Password do not match.')
      return;
    } else if(data.password === '' || data.password === undefined){
        alert('Password is required.')
    } else {
      setIsSubmit(true)
    }
  }

  
  useEffect(() => { 
    isSubmit && postData();
  }, [isSubmit]);

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
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
                Password</h1>
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
                <Link href='/admin/profile/edit' className='font-semibold'>
                  Edit Password</Link>
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
                    Edit Password.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            {/* <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/profile'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div> */}

          
           
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="password" 
                  name='password'
                  onChange={(e) => setData({...data, password: e.target.value})}
                  placeholder="Write your New Password here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="password" 
                  name='password_confirmation'
                  onChange={(e) => setData({...data, password_confirmation: e.target.value})}
                  placeholder="Write Password Confirmation here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
           
            

            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button
                  onClick={handleSubmit}
                  className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
