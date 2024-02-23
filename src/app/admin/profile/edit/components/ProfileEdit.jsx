"use client"

import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { tokenAuth } from '@/api/tokenAuth';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";




export default function ProfileEdit() {
    const router = useRouter()
  const [data, setData] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  const [image, setImage] = useState();
  const { getAuthToken } = tokenAuth();
  
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${getAuthToken()}`
  }}

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`profile/`, config)
        .then((response) => {
          setData({
            id: response.data.data.id,
            // image: response.data.data.image,
            first_name: response.data.data.first_name,
            last_name: response.data.data.last_name,
            email: response.data.data.email,
            phone_number: response.data.data.phone_number,
            address: response.data.data.address,
            profession: response.data.data.profession,
            bio: response.data.data.bio,
          })
          response.data.data.image && setImage(baseURL + response.data.data.image)
        
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 

  /* SAVE DATA */
  async function postData() {
    setIsSubmit(false);
    try{
      const result = await AxiosClient.post(`user/${data.id}`, data, config)
        .then((response) => {
          setData(() => response.data.data)
          router.push(`/admin/profile`)
        
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
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Edit Profile.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/profile'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>

            <div className="w-[100%] mb-[2rem] ">
                <div className='flex justify-start gap-4 items-center pb-[1.5rem]'>
                    <label className='w-[20%] font-semibold'>Image</label>
                    <input 
                    type="file" 
                    name='image'
                    onChange={(e) => {
                      setData({...data, image: e.target.files[0] })
                      setImage(URL.createObjectURL(e.target.files[0]))
                    }}
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={image} className='w-[100%] h-[100%] object-cover' />
                </div>
 
            </div>
            <div className="w-[100%] mb-[2rem] flex justify-start gap-4 items-center">
                <input 
                  type="text" 
                  name='first_name'
                  value={data.first_name}
                  onChange={(e) => setData({...data, first_name: e.target.value})}
                  placeholder="Write your First Name..." 
                  className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                <input 
                  type="text" 
                  name='last_name'
                  value={data.last_name}
                  onChange={(e) => setData({...data, last_name: e.target.value})}
                  placeholder="Write your Last Name..." 
                  className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="email" 
                  name='email'
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                  placeholder="Write your Email here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  name='phone_number'
                  value={data.phone_number}
                  onChange={(e) => setData({...data, phone_number: e.target.value})}
                  placeholder="Write your Phone Number here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text"
                  name='address'
                  value={data.address}
                  onChange={(e) => setData({...data, address: e.target.value})} 
                  placeholder="Write your Address here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='profession'
                  value={data.profession}
                  onChange={(e) => setData({...data, profession: e.target.value})} 
                  placeholder="Write your Profession here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
           
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                  name='bio'
                  value={data.bio}
                  onChange={(e) => setData({...data, bio: e.target.value})} 
                  placeholder="Write your Bio here..." 
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
