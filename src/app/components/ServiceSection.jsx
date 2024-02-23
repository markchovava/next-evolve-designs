"use client"
import { baseURL } from '@/api/baseURL'
import fetcherWeb from '@/swr/fetcherWeb'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'




export default function ServiceSection({ services }) {


  return (
    <section className='w-[100%] h-auto bg-slate-50'>
      <div className='w-[90%] h-[100%] mx-auto py-[5rem]'>
        <div className="flex items-center justify-center flex-col">
          <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem]">Our Services</h1>
          <hr className="border-t-4 border-slate-900 w-[20%] pb-[2rem]" />
        </div>
        <section className='grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1'>
          {/* COL */}
          {services && services.length > 0 && 
              services.map(item => (
                  <div key={item.id} className='group h-[30rem] bg-top bg-cover relative flex items-end justify-center' 
                    style={{backgroundImage: `url('${baseURL + item.thumbnail}')`}}>
                    <div className='group-hover:opacity-0 transition-all duration-300 w-[100%] flex items-center justify-center py-4 bg-slate-900/70 drop-shadow-lg text-xl font-semibold text-white shadow-lg'>
                      {item.name}</div>
                      <div className='w-[100%] h-[100%] opacity-0 group-hover:opacity-100 transition-all duration-300 
                                  absolute top-0 z-20 bg-slate-950/80 flex flex-col items-center justify-center text-white'>
                          <h4 className='text-center font-bold text-2xl pb-2 drop-shadow-xl'>{item.name}</h4>
                          {/* <p className='text-center pb-3 drop-shadow-xl'>Architectural<br /> designs.</p> */}
                          <Link href={`/service/${item.id}`} className='group transition ease-in-out duration-200  flex items-center justify-center gap-1 rounded-xl py-[1rem] px-[2rem] text-white border hover:bg-gradient-to-br  hover:from-slate-500 hover:to-slate-700'>
                              Learn More<BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                          </Link>
                      </div>
                  </div>
              ))
          }
          
          
        </section>
      </div>
    </section>
  )
}
