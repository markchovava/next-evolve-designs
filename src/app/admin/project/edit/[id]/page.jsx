"use client"

import AxiosClient from '@/api/axiosClient';
import { baseURL } from '@/api/baseURL';
import { getToken } from '@/api/token';
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsArrowRight, BsChevronRight } from "react-icons/bs";
import { CiCircleRemove } from 'react-icons/ci';


const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
    'Authorization': `Bearer ${getToken()}`
}}


export default function page({ params: {id} }) {
  const router = useRouter();
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const imageFile = useRef(null)
  const formData = new FormData();

  /* GET DATA */
  async function getData() {
    try{
      const result = await AxiosClient.get(`project/${id}`, config)
        .then((response) => {
          setData(() => response.data.data)
          setImages(() => response.data.data.project_images.map((item, i=1) => (
              { ...item,  
                image: baseURL + item.image, 
                priority: i++ })))  
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }   
   } 

  /* UPDATE DATA */
  async function postData() {
    setIsSubmit(false);
    formData.append('name', data.name)
    formData.append('description', data.description)
    formData.append('thumbnail', data.thumbnail)
    
    data.project_images.forEach((item, i) => {
      formData.append(`project_images[${i}]`, item.uploaded_image)
    }) 
    

    try{
      const result = await AxiosClient.post(`project/${id}`, data, config)
        .then((response) => {
          console.log(response.data)
          router.push(`/admin/project/${id}`)
        })
    } catch (error) {
        console.error(`Error: ${error}`)
    } 


    } 


   /* DELETES SINGLE IMAGE */
   async function deleteData(id){
    try{
      const result = await AxiosClient.delete(`project-images/${id}`, config)
      .then((response) => {
        console.log(response.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  
   }


  useEffect(() => { 
    isSubmit && postData();
  }, [isSubmit]);

  useEffect(() => { 
      getData()
  }, []);


   /* ADD PLACEHOLDERS IF IMAGES ARE LESS THAN 5 */
  if(images.length < 5){
      let i = images.length;
      let obj = {priority: i, image: ''}
      setImages((prev) => [...prev, obj]) 
      i++; 
    
  } 

 
  console.log(images)

  return (
    <div>
       <Header />
       {/* PAGE TITLE */}
       <section style={{backgroundImage: `url('/assets/img/header/02.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
                Project</h1>
            <hr className="border-t-4 border-white drop-shadow-xl w-[20%]" />
          </div>
        </div>
      </section>
      {/* BREADCRUMBS */}
      <section className='w-[100%] bg-slate-50'>
        <div className='mx-auto w-[90%]'>
            <ul className='py-2 flex items-center justify-start gap-2'>
              <li className='flex gap-1 justify-start items-center'>
                <Link href='' className='flex justify-start items-center'>Home</Link> 
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/' >
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/project' >
                  Project</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href={`/admin/project/edit/${data.id}`} className='font-semibold'>
                  Edit Project</Link>
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
                    Edit Project.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3.5rem]" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] ">
                <div className='flex justify-start gap-4 items-center pb-[1.5rem]'>
                    <label className='w-[20%] font-semibold'>Image Thumbnail:</label>
                    <input 
                    type="file" 
                    name="thumbnail"
                    onChange={(e) => setData({...data, thumbnail: e.target.value})}
                    placeholder="Write your First Name..." 
                    className="w-[50%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                </div>
                <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                    <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>Image </div>
                    <img src={baseURL + data.thumbnail} className='absolute z-10 w-[100%] h-[100%] object-cover' />
                </div>
            </div>    
            {/* ROW */}
            <div className="w-[100%] mb-[2rem]">
                <input 
                type="text" 
                name='name'
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value})}
                placeholder="Write your Name here..." 
                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <textarea 
                  name='description'
                  value={data.description}
                  onChange={(e) => setData({...data, description: e.target.value})}
                  placeholder="Write your Description here..." 
                  className="w-[100%] h-[10rem] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300"></textarea>
            </div>
             {/* ROW */}
             <div className="w-[100%] mb-[3rem] grid grid-cols-3 gap-6 ">
                {/* COL */}
                { images && 
                  images.map((item) => (
                    <div className='' key={item.priority}>
                        <input 
                          type="file" 
                          ref={imageFile}
                          onChange={(e) => {
                            let indexToUpdate = images.findIndex(obj => obj.priority == item.priority)
                            item?.id && deleteData(item.id)
                            const [...updatedImages] = images;
                            updatedImages[indexToUpdate] = { ...updatedImages[indexToUpdate], 
                              image: URL.createObjectURL(e.target.files[0]), 
                              uploaded_image: e.target.files[0]  }
                            setImages(indexToUpdate !== -1 ? updatedImages : images)
                          }}
                          className="w-[100%] mb-4 rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300" />
                        <div className='relative w-[15rem] h-[15rem] rounded-2xl border bg-slate-200 overflow-hidden'>
                            <div className='absolute z-[10] w-[100%] h-[100%] flex items-center justify-center text-slate-600'>
                              Image</div>
                            <img 
                              src={item.image} 
                              className='absolute z-10 w-[100%] h-[100%] object-cover' />
                            <CiCircleRemove  
                              onClick={() => {
                                let indexToRemove = images.findIndex(obj => obj.priority == item.priority)
                                item?.id && deleteData(item.id)
                                const [...removeImages] = images;
                                removeImages[indexToRemove] = { ...removeImages[indexToRemove], 
                                  image:'', 
                                  uploaded_image: '' }
                                setImages(indexToRemove !== -1 ? removeImages : images)
                                imageFile.current.value = '';
                              }} 
                              className='absolute top-5 right-5 z-20 text-2xl text-slate-100 hover:text-red-400' />
                        </div>
                    </div>

                  ))
                }

            </div>
            {/* ROW */}
            <div className="w-[100%] mb-[2rem] flex items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    let imageFiles = images.filter(item => item.uploaded_image !== undefined )
                    let imageItems = [];
                    imageFiles.map(item => imageItems = [...imageItems, item.uploaded_image !== '' && item.uploaded_image])
                    setData({...data, project_images: imageItems})
                    console.log('imageItems')
                    console.log(imageItems)
                    setIsSubmit(true)
                  }} 
                  className='w-[20%] group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                  Submit <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' /></button>
            </div>
        </div>
      </section>

    
      <Footer />
    </div>
  )
}
