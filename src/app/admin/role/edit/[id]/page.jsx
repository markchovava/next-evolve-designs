"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Link from 'next/link'
import { BsChevronRight } from "react-icons/bs";
import RoleEdit from './components/RoleEdit';
import useSWR from 'swr';
import { baseURL } from '@/api/baseURL';
import fetcherWeb from '@/swr/fetcherWeb';



export default function page({ params: {id} }) {
  const { data: appData, error: appInfoError } = useSWR(`${baseURL}app-info`, fetcherWeb)
  const { data: serviceData, error: servicesError } = useSWR(`${baseURL}service`, fetcherWeb)
  const { data: categoryData, error: categoriesError } = useSWR(`${baseURL}category`, fetcherWeb)
  const appInfo = appData?.data;
  const services = serviceData?.data;
  const categories = categoryData?.data;
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories} />
       {/* PAGE TITLE */}
       <section style={{backgroundImage: `url('/assets/img/header/02.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Role</h1>
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
                <Link href='/admin/role'>
                  Role</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href={`/admin/role/edit/${id}`} className='font-semibold'>
                  Edit Role</Link>
              </li>
            </ul>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <RoleEdit id={id} />

      {/* FOOTER */}
      <Footer appInfo={appInfo} />
    </div>
  )
}
