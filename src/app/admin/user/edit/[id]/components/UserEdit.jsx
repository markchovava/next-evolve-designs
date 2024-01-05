"use client"
import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { CiCircleRemove } from "react-icons/ci";

const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${getToken()}`
  }}

export default function UserEdit({ id }) {
    const [data, setData] = useState({});
    const [image, setImage] = useState({});
    const [role, setRole] = useState({})
    const [permission, setPermission] = useState({})
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false);
    const formData = new FormData();

    /* GET ROLES */
    async function getRoles() {
        try{
        const result = await AxiosClient.get(`role/`, config)
            .then((response) => {
            setRole(() => response.data.data)  
            console.log(response.data.data)    
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }   
    } 
    /* GET PERMISSIONS */
    async function getPermissions() {
        try{
        const result = await AxiosClient.get(`permission/`, config)
            .then((response) => {
            setPermission(() => response.data.data)  
            console.log(response.data.data)    
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }   
    } 
    /* GET DATA */
    async function getData() {
        try{
        const result = await AxiosClient.get(`user/${id}`, config)
            .then((response) => {
            setData(() => response.data.data)
            setImage(() => baseURL + response.data.data.image)
            console.log(response.data.data)   
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }   
    } 

    async function postData() {
        setIsSubmit(false);
        console.log('Added by USER')
        console.log(data)
        formData.append('role_id', data.role_id && data.role_id)
        formData.append('permission_id', data.permission_id && data.permission_id)
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
            const result = await AxiosClient.post(`user/${id}`, formData, config)
            .then((response) => {
                setData(() => response.data.data)
                console.log(response.data.data)
                router.push(`/admin/user/${id}`)
            
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
        getRoles();
        getPermissions();
    }, []);


  return (
      <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Edit User.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            {/*  */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/user/${id}`}
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View User</Link>
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
                    placeholder="Write your First Name..." 
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={image} className='w-[100%] h-[100%] object-cover' />
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
                type="text" 
                name='email'
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}
                placeholder="Write your Email here..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                type="text" 
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
                placeholder="Write your address here..." 
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
                        <option key={item.id} value={item.id} selected={item.id == data.role_id && 'selected'}>{item.name}</option>
                      ))}
                  </select>
              </div>
            }

            {/* PERMISSIONS ROW */}
            {permission.length > 0 && 
              <div className="w-[100%] mb-[2rem]">
                  <select
                    type="select"
                    name='permission_id' 
                    onChange={(e) => setData({...data, permission_id: e.target.value})} 
                    placeholder="Select Permission..." 
                    className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                      <option>Select a Permission Option.</option>
                      {permission.map(item => (
                        <option key={item.id} value={item.id} selected={item.id == data.permission_id && 'selected'}>
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
