"use client"
import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaEye } from 'react-icons/fa';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}


export default function ProjectContent() {
  const [data, setData] = useState({});
  const [nextURL, setNextURL] = useState()
  const [prevURL, setPrevURL] = useState()
  const [search, setSearch] = useState('');
  const [searchSubmit, setSearchSubmit] = useState(false);

  /* PAGINATION */
  async function paginationHandler(url) {
    try{
       const result = await AxiosClient.get(url, config)
       .then((response) => {
            setData(response.data.data)
            setPrevURL(response.data.links.prev)
            setNextURL(response.data.links.next)
       })
    } catch (error) {
       console.error(`Error: ${error}`)
    }     
  }

   /* SEARCH DATA */
  async function searchData() {
    if(search == ''){
        try{
            const result = await AxiosClient.get(`project/`, config)
            .then((response) => {
                setData(response.data.data)
                console.log(response.data.data)
                setPrevURL(response.data.links.prev)
                setNextURL(response.data.links.next)
                setSearch(search)
                setSearchSubmit(false)

            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }  
    }
        try{
            const result = await AxiosClient.get(`project?search=${search}`, config)
            .then((response) => {
                setData(response.data.data)
                console.log(response.data.links.prev)
                setPrevURL(response.data.links.prev)
                setNextURL(response.data.links.next)
                setSearch(search)
                setSearchSubmit(false)
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }   
  } 
  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`project/`, config)
        .then((response) => {
          setData(() => response.data.data)
          console.log(response.data.data)
          setPrevURL(response.data.links.prev)
          setNextURL(response.data.links.next)
        
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
  } 
  /* DELETE DATA */
  async function deleteData(id) {
    try{
      const result = await AxiosClient.delete(`project/${id}`, config)
      .then((response) => {
        getData()
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  } 

  useEffect(() => { 
    if(searchSubmit == true){
        searchData()
    }
  }, [searchSubmit]); 
  
  useEffect(() => { 
      getData();
  }, []);


  return (
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[90%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Project List</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3rem]" />
            </div>

            {/*  */}
            <div className='w-[100%] flex items-center justify-between h-auto pb-[1.2rem]'>
                <div className='lg:w-[40%] w-[70%] flex items-center justify-start gap-2'>
                    <input 
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder='Search by name...' 
                        className='w-[100%] py-3 px-3 rounded-lg outline-none border border-slate-300' 
                    />
                    <button 
                        onClick={() => setSearchSubmit(true)}
                        className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg lg:px-8 px-6 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white '>
                        Search</button>
                </div>
                <div>
                    <Link
                      href='/admin/project/add'
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg px-6 lg:px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      Add</Link>
                </div>
            </div>

            <section className="w-[100%] lg:overflow-hidden overflow-auto">
              {/* ROW */}
              <div className="font-bold w-[50rem] lg:w-[100%] flex items-center justify-start bg-slate-100 py-3 border border-slate-200 ">
                  <div className="w-[30%] p-3 ">NAME</div>
                  <div className="w-[20%] p-3 border-l border-slate-300">UPDATED</div>
                  <div className="w-[30%] p-3 border-l border-slate-300">AUTHOR</div>
                  <div className="w-[20%] p-3 border-l border-slate-300">ACTION</div>
              </div>
              {/* ROW */}
              { data.length > 0 ?
                data.map(item => (
                  <div key={item.id} className="w-[50rem] lg:w-[100%] flex items-center justify-start py-3 border border-slate-200 ">
                      <div className="w-[30%] p-3 ">{item.name}</div>
                      <div className="w-[20%] p-3 border-l border-slate-300">{item.updated_at}</div>
                      <div className="w-[30%] p-3 border-l border-slate-300">
                        { item.user ? 
                          (item.user.first_name && item.user.first_name) + ' ' + 
                          item.user.last_name && item.user.last_name : 
                          'Not Defined.'
                        }
                      </div>
                      <div className="w-[20%] p-3 border-l border-slate-300 flex justify-start items-center gap-3 text-xl">
                          <Link href={`/admin/project/${item.id}`}> <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
                          <Link href={`/admin/project/edit/${item.id}`}> <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                          <button
                              onClick={() => deleteData(item.id)}> 
                              <MdDeleteForever 
                                  className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> 
                          </button>
                          <Link href={`/admin/project-category/edit/${item.id}`}> 
                            <FaCirclePlus className='hover:text-purple-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                      </div>
                  </div>
                ))
                :
                <div className="w-[50rem] lg:w-[100%] flex items-center justify-center py-4 border border-slate-200 ">
                    <h6 className='text-2xl'>No Data Available at the moment.</h6>
                </div>
              }
            </section>
           

             {/* PAGINATION */}
          <div className="w-[100%] flex items-center justify-end gap-4 pt-[2rem]">
            { prevURL &&     
              <button 
                onClick={() => paginationHandler(prevURL)}
                className='group flex items-center justify-center gap-1 rounded-lg px-4 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white '>
                  <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                  Prev 
              </button>
            }
            { nextURL &&
              <button 
                onClick={() => paginationHandler(nextURL)}
                className='group flex items-center justify-center gap-1 rounded-lg px-4 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white '>
                  Next 
                  <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
              </button> 
            }
          </div>


           
        </div>
      </section>
  )
}
