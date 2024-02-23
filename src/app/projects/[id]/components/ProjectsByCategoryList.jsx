"use client"

import { baseURL } from "@/api/baseURL";
import Loader from "@/components/Loader";
import { MainContextState } from "@/context/MainContext";
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";



export default async function ProjectsByCategoryList({ id, category, projectCategories }) {
    
    //const [data, setData] = useState(projectCategories?.data);
    //console.log(data)
    const data = projectCategories?.data;
    const { isLoading, setIsLoading } = MainContextState()
    //const [data, setData] = useState([]);
    const [nextURL, setNextURL] = useState();
    const [prevURL, setPrevURL] = useState();

    /* PAGINATION */
    async function paginationHandler(url) {
      try{
        const result = await axios.get(url)
        .then((response) => {
              setData(response.data.data)
              setPrevURL(response.data.links.prev)
              setNextURL(response.data.links.next)
        })
      } catch (error) {
        console.error(`Error: ${error}`)
      }     
    }


    /* GET PROJECTS BY CATEGORY ID */
   /*  async function getData() {
      try{
        const result = await axios.get(`${baseURL}project/category/${id}`)
          .then((response) => {
            setData(() => response.data.data)  
            console.log(response.data)  
            setPrevURL(response.data.links.prev)
            setNextURL(response.data.links.next)
          })
        } catch (error) {
          console.error(`Error: ${error}`)
        }   
    }  
 */

     /* useEffect(() => {
      getData();
     
    }, []); */

    if(category && data){
      setIsLoading(false);
    }
 

    
  return (
    <>
    {isLoading == true ? <Loader /> :
    <>
        {/* PAGE TITLE */}
        <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
          <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
            <div className="flex items-center justify-center flex-col">
              <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
                {category?.name && category?.name}</h1>
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
                  <Link href='#'>
                    Pojects</Link>
                </li>
                <li><BsChevronRight /></li>
                <li className='flex justify-start items-center'>
                  <Link href={`/projects/${id}`} className='font-semibold'>
                    {category?.name && category?.name}</Link>
                </li>
              </ul>
          </div>
        </section>
        {/* SERVICES */}
        <section className='w-[100%] h-auto'>
          <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
            <div className="flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                  Our {category?.name && category?.name}</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[3rem]" />
            </div>
            {/* Details */}
            <section className='w-[100%] pb-[2rem] flex items-center justify-between'>     
                <div className='flex gap-1 justify-start items-center text-xl font-semibold'>
                  Current Projects ( {data?.length} )</div>
                <section className='flex items-center justify-center gap-4 pb-[2rem]'>
                    { prevURL &&  
                      <button
                        onClick={() => paginationHandler(prevURL)}
                        className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                          <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                          Prev 
                      </button>
                    }
                    { nextURL &&
                      <button 
                        onClick={() => paginationHandler(nextURL)}
                        className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                          Next 
                          <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
                      </button>
                    }
                </section>
            </section>

            {/* CONTENT */}
            {data?.length > 0 &&
              <section className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 pb-[3rem]'>    
                  {/* COL */}
                  {data.map(item => (
                    <Link href={`/projects/project/${item.id}`} key={item.id} className='group h-[25rem] aspect[3/5] overflow-hidden relative flex items-end justify-center'>
                        <img src={baseURL + item.thumbnail} alt='' className='w-[100%] h-[100%] object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
                    </Link >
                  ))}
              </section>
            }

            {/* PAGINATION */}
            <section className='flex items-center justify-end gap-4 pb-[1rem]'>
                { prevURL &&  
                  <button
                    onClick={() => paginationHandler(prevURL)}
                    className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                      <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                      Prev 
                  </button>
                }
                { nextURL &&
                  <button 
                    onClick={() => paginationHandler(nextURL)}
                    className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                      Next 
                      <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
                  </button>
                }
            </section>
        </div>
        </section>
    </>
    }
      
    </>
  )
}
