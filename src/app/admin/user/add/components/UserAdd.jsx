"use client"
import AxiosClient from '@/api/axiosClient';
import { useRouter } from 'next/navigation';
import { CiCircleRemove } from "react-icons/ci";
import { useEffect, useRef, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { tokenAuth } from '@/api/tokenAuth';




export default function UserAdd() {
    const router = useRouter()
    const [data, setData] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);
    const [image, setImage] = useState()
    const [role, setRole] = useState({})
    const imageRef = useRef(null)
    const formData = new FormData();
    const { getAuthToken } = tokenAuth();

    const config = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
    }}
  
  
    /* GET ROLES */
    async function getRoles() {
      try{
        const result = await AxiosClient.get(`role/`, config)
          .then((response) => {
            setRole(() => response.data.data)     
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    } 
    
  
    /* SUBMIT DATA */
    async function postData() {
      setIsSubmit(false);
      formData.append('role_id', data.role_id && data.role_id)
      formData.append('image', data.image && data.image)
      formData.append('name', `${data.first_name && data.first_name} ${data.last_name && data.last_name}`)
      formData.append('first_name', data.first_name && data.first_name)
      formData.append('last_name', data.last_name && data.last_name)
      formData.append('phone_number', data.phone_number && data.phone_number)
      formData.append('email', data.email && data.email)
      formData.append('address', data.address && data.address)
      formData.append('profession', data.profession && data.profession)
      formData.append('bio', data.bio && data.bio)
  
      try{
        const result = await AxiosClient.post(`user/`, formData, config)
          .then((response) => {
            setData(() => response.data.data)
            console.log(response.data.data)
            router.push('/admin/user')
          
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }
      
    } 
  
    useEffect(() => { 
      getRoles();
    }, []);
  
    useEffect(() => { 
      isSubmit == true && postData();
    }, [isSubmit]);


  return (
     <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Add User.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            <div className="w-[100%] mb-[2rem] ">
                <div className='flex justify-start gap-4 items-center pb-[1.5rem]'>
                    <label className='w-[20%] font-semibold'>Image</label>
                    <input 
                    type="file"
                    name='image'
                    onChange={(e) => {
                      setData({...data, image: e.target.files[0]});
                      setImage(URL.createObjectURL(e.target.files[0])) 
                    }}
                    placeholder="Upload your image..." 
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute  w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={image} className='absolute w-[100%] h-[100%] object-cover z-20' />
                    <CiCircleRemove 
                      onClick={() => {
                          setImage('');
                          setData({...data, image: ''})
                          //imageRef.current.value = '';
                      }} 
                      className='absolute top-5 right-5 z-20 text-2xl text-red-500 hover:text-red-700' />
                </div>
            </div>
            
            <div className="w-[100%] mb-[2rem] flex justify-start gap-4 items-center">
                <input 
                type="text"
                name='first_name'
                onChange={(e) => setData({...data, first_name: e.target.value})} 
                placeholder="Write your First Name..." 
                className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                <input 
                type="text" 
                name='last_name'
                onChange={(e) => setData({...data, last_name: e.target.value})} 
                placeholder="Write your Last Name..." 
                className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                type="email" 
                required='required'
                name='email'
                onChange={(e) => setData({...data, email: e.target.value})} 
                placeholder="Write your Email here..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='phone_number'
                  onChange={(e) => setData({...data, phone_number: e.target.value})} 
                  placeholder="Write your Phone Number here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='address'
                  onChange={(e) => setData({...data, address: e.target.value})} 
                  placeholder="Write your Address here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                  type="text" 
                  name='profession'
                  onChange={(e) => setData({...data, profession: e.target.value})} 
                  placeholder="Write your Profession here..." 
                  className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>


            {/* ROLES ROW */}
            {role.length > 0 && 
              <div className="w-[100%] mb-[2rem]">
                  <select
                    type="select"
                    name='role_id' 
                    onChange={(e) => setData({...data, role_id: e.target.value})} 
                    placeholder="Select Role..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                      <option>Select a Role Option.</option>
                      {role.map(item => (
                        <option 
                          key={item.id} 
                          value={item.id} 
                          selected={item.id == data.role_id && 'selected'}>
                            {item.name}</option>
                      ))}
                  </select>
              </div>
            }

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
