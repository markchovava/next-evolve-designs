"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import AxiosClient from '@/api/axiosClient';
import { CgRemoveR } from "react-icons/cg";
import { tokenAuth } from '@/api/tokenAuth';




export default function ServiceTypeEdit({ id }) {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false)
    const [service, setService] = useState({});
    const [serviceType, setServiceType] = useState([]);
    const [type, setType] = useState({});
    const [typeComp, setTypeComp] = useState([{key:0}])
    const [data, setData] = useState([])
    const { getAuthToken } = tokenAuth();

    const config = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
    }}

    const addTypeComponent = () => {
        let i =  typeComp.length;
        setTypeComp([...typeComp, {key:i++}])
    }
    const subtractTypeComponent = () => {
        setTypeComp(typeComp.slice(0, -1))
        setData(data.slice(0, -1))

    }
    /* GET CATEGORY */
    async function getType() {
        try{
            const result = await AxiosClient.get(`type/`, config)
            .then((response) => {
                setType(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 
    /* GET PROJECT */
    async function getService() {
        try{
            const result = await AxiosClient.get(`service/${id}`, config)
            .then((response) => {
                setService(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 
    /* GET PROJECT CATEGORY */
    async function getServiceType() {
        try{
            const result = await AxiosClient.get(`service-type/service/${id}`, config)
            .then((response) => {
                setServiceType(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 
    /* DELETE SINGLE */
   async function deleteData(type_id){
    try{
      const result = await AxiosClient.delete(`service-type/${type_id}`, config)
      .then((response) => {
        getServiceType()
        console.log(response.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  
   }
   /* SUBMIT DATA */
    async function postData() {
        setIsSubmit(false);
        const service_types = {service_types: data}
        console.log(service_types)
        try{
        const result = await AxiosClient.post(`service-type/`, service_types, config)
            .then((response) => {
                console.log(response.data)
                router.push(`/admin/service/${id}`)
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }  
    }  

    useEffect(() => { 
        getService();
        getType();
        getServiceType()
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
                    Add Service Type.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            {/*  */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/service/${id}`}
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>

           {/* ROW */}
            <div className="w-[100%] mb-[3rem] flex items-center justify-start">
                <label className='w-[20%] gap-3'>Name:</label>
                <div className='w-[80%] font-semibold'>{service.name}</div>
            </div>

            <section className='w-[100%] h-auto flex justify-start items-start gap-3 mb-[2rem]'>
                <div className="w-[90%]">
                    {serviceType.length > 0 &&
                        serviceType.map((item, i) => (
                            <div key={i} className='w-[100%] mb-[2rem] flex justify-start items-center gap-3'>
                                <div className='w-[90%]'>
                                    Type: <b>{item.type.name}</b>
                                </div>
                                <div className='w-[10%]'>
                                    <CgRemoveR
                                        onClick={() => deleteData(item.id)}
                                        className='text-xl hover:scale-110 hover:text-red-700 transition-all duration-150 ease-in-out' />
                                </div>
                            </div>
                        ))
                    }
                    {typeComp.map((item, i) => (
                        <div key={i} className='w-[100%] mb-[2rem] flex justify-start items-center gap-3'>
                            <select
                                type="select"
                                name='type_id'
                                onChange={(e) => setData([...data, {service_id: service.id, type_id: e.target.value}])}
                                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                                <option value=''>Select an option.</option>
                                {type.length > 0 && 
                                    type.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))
                                }
                                
                            </select>
                        </div>
                    ))}
                </div>
                <div className="w-[10%] flex justify-center items-start gap-3 py-[1rem]">
                        <FaRegPlusSquare onClick={addTypeComponent} className='text-2xl hover:scale-110 hover:text-green-700 transition-all duration-150 ease-in-out' />
                        <CgRemoveR onClick={subtractTypeComponent}  className='text-2xl hover:scale-110 hover:text-green-700 transition-all duration-150 ease-in-out' />
                        
                </div>
            </section>
           
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={() => setIsSubmit(true)} 
                  className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  Submit 
                  <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
    </section>
  )
}
