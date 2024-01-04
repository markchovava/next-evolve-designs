"use client"
import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";
import { FaEye } from 'react-icons/fa';
import { MdDeleteForever, MdEdit } from 'react-icons/md';


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
      const result = await AxiosClient.get(`role/${id}`, config)
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
      const result = await AxiosClient.put(`role/${id}`, data, config)
        .then((response) => {
          setData(() => response.data.data)
          console.log(response.data)
          router.push(`/admin/role/${data.id}`)   
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
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Role</h1>
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
                <Link href='/' className='font-semibold'>
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/role' className='font-semibold'>
                  Role</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href={`/admin/role/edit/${data.id}`} className='font-semibold'>
                  Edit Role</Link>
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
                    Edit Role.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>
             {/* ROW */}
             <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/role/${data.id}`}
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                type="text"
                name='name'
                onChange={handleInput}
                value={data.name} 
                placeholder="Write your First Name..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <select
                type="select" 
                placeholder="Write your First Name..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                    <option value=''>Select an option.</option>
                    <option value='1' selected={data.level == 1 && 'selected'}>1</option>
                    <option value='2' selected={data.level == 2 && 'selected'}>2</option>
                    <option value='3' selected={data.level == 3 && 'selected'}>3</option>
                    <option value='4' selected={data.level == 4 && 'selected'}>4</option>
                </select>
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                  value={data.description}
                  onChange={handleInput}
                  name='description'
                  placeholder="Write your Message here..." 
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
