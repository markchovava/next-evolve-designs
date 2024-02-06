"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import Link from 'next/link'
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { tokenRole } from '@/api/tokenRole';
import { baseURL } from '@/api/baseURL';
import axios from 'axios';
import { tokenAuth } from '@/api/tokenAuth';


export default function RegisterEdit() {
    const router = useRouter();
    const [data, setData] = useState({});
    const { setRole } = tokenRole();
    const { setAuthToken } = tokenAuth()

    const config = {
        headers: {
            "Content-Type": "application/json",
            }}

    const [isSubmit, setIsSubmit] = useState(false)

    const handleInput = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }


  async function postData() {
    setIsSubmit(false)
    try{
      const result = await axios.post(`${baseURL}register/`, data, config)
      .then((response) => {
        setAuthToken(response.data.auth_token)
        setRole(response.data.role_level)
        console.log(response.data)
        //router.push('/')
        
       
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
        <section className='w-[100%] h-auto bg-gray-100'>
        <div className="mx-auto lg:w-[60%] w-[80%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Register.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[1.5rem]" />
                <h6 className='pb-[2.5rem] flex gap-1'>
                Login
                <Link className='underline hover:text-blue-700' href='/login'>here.</Link>
                </h6>
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                    type="email" 
                    name='email'
                    required
                    onChange={handleInput}
                    placeholder="Write your Email..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                    type="password" 
                    name='password'
                    required
                    onChange={handleInput}
                    placeholder="Enter Password here..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                    type="password" 
                    name='password_confirmation'
                    required
                    onChange={handleInput}
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
