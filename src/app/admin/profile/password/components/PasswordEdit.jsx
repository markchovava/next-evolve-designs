"use client"

import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";


const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}

export default function PasswordEdit() {
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
  )
}
