"use client"
import { useEffect, useState } from 'react';
import { getToken } from '@/api/token';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { BsArrowRight } from "react-icons/bs";
import { FaRegPlusSquare } from "react-icons/fa";
import AxiosClient from '@/api/axiosClient';
import { CgRemoveR } from "react-icons/cg";
import { tokenAuth } from '@/api/tokenAuth';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}}

export default function ProjectCategoryEdit({ id }) {
    const router = useRouter();
    const [isSubmit, setIsSubmit] = useState(false)
    const [project, setProject] = useState({});
    const [projectCategory, setProjectCategory] = useState([]);
    const [category, setCategory] = useState({});
    const [categoryComp, setCategoryComp] = useState([{key:0}])
    const [data, setData] = useState([])
    const { getAuthToken } = tokenAuth();

    const config = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getAuthToken()}`
    }}

    const addCategoryComponent = () => {
        let i =  categoryComp.length;
        setCategoryComp([...categoryComp, {key:i++}])
    }

    const subtractCategoryComponent = () => {
        setCategoryComp(categoryComp.slice(0, -1))
        setData(data.slice(0, -1))

    }

    /* GET CATEGORY */
    async function getCategory() {
        try{
            const result = await AxiosClient.get(`category/`, config)
            .then((response) => {
                setCategory(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 

    /* GET PROJECT */
    async function getProject() {
        try{
            const result = await AxiosClient.get(`project/${id}`, config)
            .then((response) => {
                setProject(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 
    /* GET PROJECT CATEGORY */
    async function getProjectCategory() {
        try{
            const result = await AxiosClient.get(`project-category/project/${id}`, config)
            .then((response) => {
                setProjectCategory(() => response.data.data)
                //console.log(response.data.data)   
            })
            } catch (error) {
            console.error(`Error: ${error}`)
            }   
    } 

    /* DELETES SINGLE */
   async function deleteData(category_id){
    try{
      const result = await AxiosClient.delete(`project-category/${category_id}`, config)
      .then((response) => {
        getProjectCategory()
        console.log(response.data)
      })
    } catch (error) {
      console.error(`Error: ${error}`)
    }   
  
   }

  /* SUBMIT DATA */
    async function postData() {
        setIsSubmit(false);
        const project_categories = {project_categories: data}
        //console.log(project_categories)
        try{
        const result = await AxiosClient.post(`project-category/`, project_categories, config)
            .then((response) => {
            router.push(`/admin/project/${id}`)
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        }  
    }  

    useEffect(() => { 
        getProject();
        getCategory();
        getProjectCategory()
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
                    Add Project Category.</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2.5rem]" />
            </div>

            {/*  */}
            <div className='flex justify-end items-center pb-[2rem] '>
                <Link
                      href={`/admin/project/${id}`}
                      className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg  px-8 py-3 bg-slate-500 text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700 hover:text-white'>
                      View</Link>
            </div>

           {/* ROW */}
            <div className="w-[100%] mb-[3rem] flex items-center justify-start">
                <label className='w-[20%] gap-3'>Name:</label>
                <div className='w-[80%] font-semibold'>{project.name}</div>
            </div>

            <section className='w-[100%] h-auto flex justify-start items-start gap-3 mb-[2rem]'>
                <div className="w-[90%]">
                    {projectCategory.length > 0 &&
                        projectCategory.map((item, i) => (
                            <div key={i} className='w-[100%] mb-[2rem] flex justify-start items-center gap-3'>
                                <div className='w-[90%]'>
                                    Category: <b>{item.category.name}</b>
                                </div>
                                <div className='w-[10%]'>
                                    <CgRemoveR
                                        onClick={() => deleteData(item.id)}
                                        className='text-xl hover:scale-110 hover:text-red-700 transition-all duration-150 ease-in-out' />
                                </div>
                            </div>
                        ))
                    }
                    {categoryComp.map((item) => (
                        <div key={i} className='w-[100%] mb-[2rem] flex justify-start items-center gap-3'>
                            <select
                                type="select"
                                name='category_id'
                                onChange={(e) => setData([...data, {project_id: project.id, category_id: e.target.value}])}
                                className="w-[100%] rounded-xl px-[1rem] py-[1rem] outline-none border border-slate-300">
                                <option value=''>Select an option.</option>
                                {category.length > 0 && 
                                    category.map((item, i) => (
                                        <option key={i} value={item.id}>{item.name}</option>
                                    ))
                                }
                                
                            </select>
                        </div>
                    ))}
                </div>
                <div className="w-[10%] flex justify-center items-start gap-3 py-[1rem]">
                        <FaRegPlusSquare onClick={addCategoryComponent} className='text-2xl hover:scale-110 hover:text-green-700 transition-all duration-150 ease-in-out' />
                        <CgRemoveR onClick={subtractCategoryComponent}  className='text-2xl hover:scale-110 hover:text-green-700 transition-all duration-150 ease-in-out' />
                        
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
