"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import AxiosClient from '@/api/axiosClient';
import { tokenAuth } from '@/api/tokenAuth';



export default function RoleAdd() {
    const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false)
  const [data, setData] = useState({
    name: '',
    level: null,
    description: '',
  });
  const { getAuthToken } = tokenAuth();

    const config = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
    }}

  const handleInput = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  /* POST DATA */
  async function postData() {
    setIsSubmit(false);
    try{
      const result = await AxiosClient.post(`role/`, data, config)
        .then((response) => {
          console.log(response.data)
          router.push('/admin/role')
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  }  

  useEffect(() => { 
    isSubmit && postData();
  }, [isSubmit]);


  return (
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Add Role.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='name'
                  onChange={handleInput}
                  placeholder="Write your First Name..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <select
                  name='level'
                  onChange={handleInput} 
                  placeholder="Write your First Name..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                    <option value=''>Select an Option.</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                </select>
            </div>
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                    name='description'
                    onChange={handleInput} 
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
  )
}
