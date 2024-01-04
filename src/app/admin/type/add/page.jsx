"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { getToken } from '@/api/token';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import AxiosClient from '@/api/axiosClient';
import Footer from '@/components/Footer';
import Header from '@/components/Header'


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function page() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false)
  const [data, setData] = useState({
    name: '',
    description: '',
  });

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  /* SUBMIT DATA */
  async function postData() {
    console.log(data)
    setIsSubmit(false);
    try{
      const result = await AxiosClient.post(`type/`, data, config)
        .then((response) => {
          console.log(response.data)
          router.push('/admin/type')
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  }  

  useEffect(() => { 
    if(isSubmit == true){
      postData();
    }
  }, [isSubmit]);



  return (
    <div>
       <Header />
       {/* PAGE TITLE */}
       <section style={{backgroundImage: `url('/assets/img/header/02.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Type</h1>
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
                <Link href='/' >
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/type' >
                  Type</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/type/add' className='font-semibold'>
                  Add Type</Link>
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
                    Add Type.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text"
                  name='name'
                  onChange={handleInput} 
                  placeholder="Write the Type Name..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                    name='description'
                    onChange={handleInput}
                    placeholder="Write your Type Description..." 
                    className="w-[100%] h-[10rem] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={() => setIsSubmit(true)}
                  className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
