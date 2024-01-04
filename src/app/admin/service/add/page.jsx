"use client"


import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { ServiceContextState } from '@/context/ServiceContext';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}



export default function page() {
  const [isSubmit, setIsSubmit] = useState(false)
  const {serviceState, serviceDispatch,} = ServiceContextState()
  const [data, setData] = useState({})
  const [thumbnail, setThumbnail] = useState()
  const [images, setImages] = useState({}) // For viewing on this page only


  async function postData() {
    setIsSubmit(false)
    try{
      const result = await AxiosClient.post(`service/`, data, config)
        .then((response) => {
          console.log(response.data)
          router.push('/admin/service')
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
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
                Service</h1>
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
                <Link href='/'>
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/service'>
                  Service</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/service/add' className='font-semibold'>
                  Add Service</Link>
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
                    Add Service.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] ">
                <div className='flex justify-start gap-4 items-center pb-[1.5rem]'>
                    <label className='w-[20%] font-semibold'>Image Thumbnail:</label>
                    <input 
                    type="file"
                    name='thumbnail' 
                    onChange={(e) => {
                      setData({...data, thumbnail:e.target.files[0]})
                      setThumbnail(URL.createObjectURL(e.target.files[0]))
                    }}
                    placeholder="Write your First Name..." 
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={thumbnail} className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>    
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='name'
                  onChange={(e) => {
                    setData({...data, name: e.target.value})
                    console.log(data)
                  }}
                  placeholder="Write your Name here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                    onChange={(e) => {
                      setData({...data, description: e.target.value})
                      console.log(data)
                    }}
                    placeholder="Write your Description here..." 
                    className="w-[100%] h-[10rem] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
             {/* ROW */}
             <div className="w-[100%] mb-[3rem] grid grid-cols-3 gap-6 ">
                {/* COL */}
                <div className=''>    
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        serviceDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 1, image: e.target.files[0] }})
                          setImages({...images, img1: URL.createObjectURL(e.target.files[0])})
                      }}
                      className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={images.img1} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                {/* COL */}
                <div className=''>
                   
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        serviceDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 2, image: e.target.files[0] }})
                          setImages({...images, img2: URL.createObjectURL(e.target.files[0])})
                      }}
                      className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={images.img2} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                {/* COL */}
                <div className=''>
                   
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        serviceDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 3, image: e.target.files[0] }})
                          setImages({...images, img3: URL.createObjectURL(e.target.files[0])})
                      }}
                      className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={images.img3} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                {/* COL */}
                <div className=''>
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        serviceDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 4, image: e.target.files[0] }})
                          setImages({...images, img4: URL.createObjectURL(e.target.files[0])})
                      }}
                      className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={images.img4} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                {/* COL */}
                <div className=''>    
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        serviceDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 5, image: e.target.files[0] }})
                          setImages({...images, img5: URL.createObjectURL(e.target.files[0])})
                      }}
                      className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                    <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                        <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                        <img src={images.img5} className='w-[100%] h-[100%] object-cover' />
                    </div>
                </div>
                
                
                
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    let imageFiles = serviceState.service_images.filter(item => item.image !== undefined )
                    let imageItems = [];
                    imageFiles.map(item => imageItems = [...imageItems, item.image])
                    setData({...data, service_images: imageItems})
                    setIsSubmit(true)}}
                className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
