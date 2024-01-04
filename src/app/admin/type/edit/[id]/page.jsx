"use client"
import AxiosClient from '@/api/axiosClient';
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


export default function page({ params: {id} }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

   /* GET DATA */
   async function getData() {
    try{
      const result = await AxiosClient.get(`type/${id}`, config)
        .then((response) => {
          setData(() => response.data.data)
          console.log(response.data.data)   
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
   } 

  /* POST DATA */
  async function postData() {
    setIsSubmit(false)
    try{
      const result = await AxiosClient.put(`type/${id}`, data, config)
        .then((response) => {
          setData(() => response.data.data)
          console.log(response.data.data)
          router.push(`/admin/type/${data.id}`)   
        })
      } catch (error) {
        console.error(`Error: ${error}`)
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
                <Link href={`/admin/type/add${data.id}`} className='font-semibold'>
                  Edit Type</Link>
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
                    Edit Type.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

             {/* ROW */}
             <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/type/1'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>

            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                type="text" 
                name='name'
                value={data.name}
                onChange={handleInput}
                placeholder="Write the Name here..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                    name='description'
                    value={data.description}
                    onChange={handleInput}
                    placeholder="Write the Description here..." 
                    className="w-[100%] h-[10rem] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
            {/*  */}
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
