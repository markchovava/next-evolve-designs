"use client"
import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";


const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}



export default function AppInfoEdit() {
    const router = useRouter()
  const [data, setData] = useState({})
  const [dbData, setDbData] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);
  const [image, setImage] = useState()
  const formData = new FormData();


  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`app-info/`, config)
        .then((response) => {
          setDbData(() => response.data.data)
          setData(() => response.data.data)
          response.data.data.image && setImage(baseURL + response.data.data.image);
          console.log(response.data.data)
          console.log(response.data.data.image)
        
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 

  /* SUBMIT DATA */
  async function submitData() {
    setIsSubmit(false);
    //console.log('Added by USER')
    //console.log(data)
    formData.append('image', data.image)
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('phone_number', data.phone_number)
    formData.append('email', data.email)
    formData.append('address', data.address)
    formData.append('website', data.website)
    formData.append('whatsapp', data.whatsapp)
    formData.append('facebook', data.facebook)
    formData.append('twitter', data.twitter)
    formData.append('instagram', data.instagram)

    if(dbData !=  false){
      try{
        console.log('update')
        const result = await AxiosClient.post(`app-info/${data.id}`, formData, config)
          .then((response) => {
            setData(() => response.data.data)
            //console.log('rETURNED FROM db')
            //console.log(response.data.data)
            router.push('/admin/app-info')
          
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }
    } else{
      try{
        const result = await AxiosClient.post(`app-info/`, formData, config)
          .then((response) => {
            setData(() => response.data.data)
            console.log(response.data.data)
          
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }
    } 
  


    
      
      
  } 

  useEffect(() => { 
    getData();
  }, []);

  useEffect(() => { 
    isSubmit == true && submitData();
  }, [isSubmit]);

  return (
    <section className='w-[100%] h-auto bg-gray-100'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Edit AppInfo.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>
             {/* ROW */}
             <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href='/admin/app-info'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>
            {/*  */}
            <div className="w-[100%] mb-[2rem] ">
                <div className='flex justify-start gap-4 items-center pb-[1.5rem]'>
                    <label className='w-[20%] font-semibold'>Image Thumbnail:</label>
                    <input 
                    type="file" 
                    name='image'
                    onChange={(e) => {
                      setData({...data, image: e.target.files[0]});
                      setImage(URL.createObjectURL(e.target.files[0]))
                    }}
                    placeholder="Write your First Name..." 
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={image} className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='name'
                  value={data.name && data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}
                  placeholder="Write your Name..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <textarea 
                  type="text" 
                  name='description'
                  value={data.description && data.description}
                  onChange={(e) => setData({...data, description: e.target.value})}
                  placeholder="Write description here..." 
                  className="w-[100%] rounded-xl px-[1rem] h-[10rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='phone_number'
                  value={data.phone_number && data.phone_number}
                  onChange={(e) => setData({...data, phone_number: e.target.value})}
                  placeholder="Write your Phone Number here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="email" 
                  name='email'
                  value={data.email && data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}
                  placeholder="Write your Email here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='website'
                  value={data.website && data.website}
                  onChange={(e) => setData({...data, website: e.target.value})}
                  placeholder="Write your Website here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='address'
                  value={data.address && data.address}
                  onChange={(e) => setData({...data, address: e.target.value})}
                  placeholder="Write your Address here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <hr className='border-t border-slate-400 pb-[2rem]'/>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text"
                  name='facebook'
                  value={data.facebook && data.facebook}
                  onChange={(e) => setData({...data, facebook: e.target.value})}
                  placeholder="Write your Facebook here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='instagram'
                  value={data.instagram && data.instagram}
                  onChange={(e) => setData({...data, instagram: e.target.value})}
                  placeholder="Write your Instagram here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='whatsapp'
                  value={data.whatsapp && data.whatsapp}
                  onChange={(e) => setData({...data, whatsapp: e.target.value})}
                  placeholder="Write your WhatsApp here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='twitter'
                  value={data.twitter && data.twitter}
                  onChange={(e) => setData({...data, twitter: e.target.value})}
                  placeholder="Write your Twitter / X here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
          
           
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={() => setIsSubmit(true)}
                    className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                    Submit 
                    <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                </button>
            </div>
        </div>
    </section>
  )
}
