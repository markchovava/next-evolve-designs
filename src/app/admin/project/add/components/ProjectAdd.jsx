"use client"
import AxiosClient from '@/api/axiosClient';
import { getToken } from '@/api/token';
import { ProjectContextState } from '@/context/ProjectContext';
import { useEffect, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from 'next/navigation';


const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}



export default function ProjectAdd() {
  const router = useRouter();
  const [isSubmit, setIsSubmit] = useState(false)
  const {projectState, projectDispatch,} = ProjectContextState()
  const [data, setData] = useState({})
  const [thumbnail, setThumbnail] = useState()
  const [images, setImages] = useState({}) // For viewing on this page only

  async function postData() {
      setIsSubmit(false)

      try{
        const result = await AxiosClient.post(`project/`, data, config)
          .then((response) => {
            console.log(response.data)
            router.push('/admin/project')
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }  
  } 

  useEffect(() => { 
    isSubmit == true && postData();
  }, [isSubmit]);

  
  return (
    <section className='w-[100%] h-auto bg-gray-50'>
        <div className="mx-auto w-[75%] py-[4rem]">
            {/* Title */}
            <div className="w-[100%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                    Add Project.</h1>
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
             <div className="w-[100%] mb-[3rem] grid lg:grid-cols-3 grid-cols-1 gap-6 ">
                {/* COL */} 
                <div className=''>    
                    <input 
                      type="file" 
                      name='image'
                      onChange={(e) => {
                        projectDispatch({
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
                        projectDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 2, image: e.target.files[0] }})
                          console.log(projectState.project_images)
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
                        projectDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 3, image: e.target.files[0] }})
                          console.log(projectState.project_images)
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
                        projectDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 4, image: e.target.files[0] }})
                          console.log(projectState.project_images)
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
                        projectDispatch({
                          type: 'ADD_IMAGE', 
                          payload: {priority: 5, image: e.target.files[0] }})
                          console.log(projectState.project_images)
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
                    let imageFiles = projectState.project_images.filter(item => item.image !== undefined )
                    let imageItems = [];
                    imageFiles.map(item => imageItems = [...imageItems, item.image])
                    setData({...data, project_images: imageItems})
                    setIsSubmit(true)}}
                className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
    </section>
  )
}
