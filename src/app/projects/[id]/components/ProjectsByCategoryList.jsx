"use client"

import { baseURL } from "@/api/baseURL";
import Link from "next/link"
import { BsArrowLeft, BsArrowRight, BsChevronRight } from "react-icons/bs";



export default async function ProjectsByCategoryList({ projects, id }) {
    const category_projectsData = await JSON.parse(projects.value)
    console.log(category_projectsData)
  

    
  return (
    <>
      {/* PAGE TITLE */}
      <section style={{backgroundImage: `url('/assets/img/header/01.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">
               {category_projectsData.data?.name}</h1>
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
                <Link href='/service/architectural' className='font-semibold'>
                  {category_projectsData.data?.name}</Link>
              </li>
            </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className='w-[100%] h-auto'>
        <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
          <div className="flex items-center justify-center flex-col">
              <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[4rem]">
                Our {category_projectsData.data?.name}</h1>
              <hr className="border-t-4 border-slate-900 w-[20%] pb-[3rem]" />
          </div>
          {/* Details */}
          <section className='w-[100%] pb-[2rem] flex items-center justify-between'>     
              <div className='flex gap-1 justify-start items-center text-xl font-semibold'>
                Current Projects ( {category_projectsData.data?.projects.length} )</div>
              <section className='flex items-center justify-center gap-4 pb-[2rem]'>
                  <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                      <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                      Prev </button>
                  <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                      Next 
                      <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
                  </button>
              </section>
          </section>

          {/* CONTENT */}
          {category_projectsData.data.projects &&
            <section className='grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 pb-[3rem]'>    
                {/* COL */}
                {category_projectsData.data?.projects.map(item => (
                  <Link href={`/projects/project/${item.id}`} key={item.id} className='group h-[25rem] aspect[3/5] overflow-hidden relative flex items-end justify-center'>
                      <img src={baseURL + item.thumbnail} alt='' className='w-[100%] h-[100%] object-fill group-hover:scale-110 transition-all ease-in duration-200 ' />
                  </Link >
                ))}
            </section>
          }

          {/* PAGINATION */}
          <section className='flex items-center justify-center gap-4 pb-[1rem]'>
              <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                  <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                  Prev </button>
              <button className='group flex items-center justify-center gap-1 border rounded-lg px-6 py-3 border-slate-500 hover:bg-gradient-to-br hover:from-slate-500 hover:to-slate-500 hover:text-white '>
                  Next 
                  <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
              </button>
          </section>
    </div>
      </section>

    </>
  )
}
