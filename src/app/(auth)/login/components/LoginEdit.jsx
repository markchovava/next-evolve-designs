"use client"

import axios from 'axios';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { setToken } from '@/api/token';
import { CiSquareRemove } from "react-icons/ci";
import { tokenRole } from '@/api/tokenRole';
import { baseURL } from '@/api/baseURL';
import { tokenAuth } from '@/api/tokenAuth';


export default function LoginEdit() {
    const router = useRouter();
    const { setRole } = tokenRole()
    const { setAuthToken } = tokenAuth();
    const [errorMsg, setErrorMsg] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState({
    email: '',
    password: '',
  });

  const config = {
    headers: {
        "Content-Type": "application/json",
        }}



  async function postData() {
    setIsSubmit(false)
    try{ 
      const result = await axios.post(`${baseURL}login`, data, config)
      .then((response) => {
        console.log(response)
        if(response.data.auth_token){
          setAuthToken(response.data.auth_token)
          setRole(response.data.role_level)
          router.push('/')
        } else if(response.data.message !== ''){
          setIsError(true)
          setErrorMsg(response.data.message)
        }
        
       
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }

  }  


  useEffect(() => { 
    isSubmit == true && postData();
  }, [isSubmit]);


  return (
    <section className='w-[100%] h-auto bg-gray-100'>
        <div className="mx-auto lg:w-[60%] w-[80%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Login.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[1.5rem]" />
                <h6 className='pb-[2rem] flex gap-1'>
                  Register 
                  <Link className='underline hover:text-blue-700' href='/register'>here.</Link>
                </h6>
                {isError == true && 
                  <p className='pb-[2rem] text-md text-red-500 flex items-center gap-4 justify-between'>
                    {errorMsg}
                    <CiSquareRemove onClick={() => setIsError(false)} />
                  </p>
                }
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                    type="email" 
                    name="email" 
                    onChange={(e) => setData({...data, email: e.target.value})}
                    placeholder="Write your Email..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                    type="password" 
                    name="password" 
                    onChange={(e) => setData({...data, password: e.target.value})}
                    placeholder="Enter Password here..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
           

           
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={ () => setIsSubmit(true) }
                  className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                    Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
      </section>
  )
}
