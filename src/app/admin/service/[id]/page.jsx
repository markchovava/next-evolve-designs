import Link from 'next/link'
import { BsChevronRight } from "react-icons/bs";
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import ServiceView from './components/ServiceView';
import getAppInfo from '@/api/getAppInfo';
import getServices from '@/api/getServices';


export default function page({ params: {id} }) {
    const appInfo = getAppInfo();
    const services = getServices()
    const categories = getCategories()
  

  return (
    <div>
        {/* HEADER */}
       <Header appInfo={appInfo} services={services} categories={categories} />
      {/* PAGE TITLE */}
      <section style={{backgroundImage: `url('/assets/img/header/02.jpg')`}} className='bg-cover bg-fixed w-[100%] h-auto bg-slate-50'>
        <div className='mx-auto w-[90%] flex items-center justify-center pt-[4rem] pb-[3rem]'>
          <div className="flex items-center justify-center flex-col">
            <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem] text-white drop-shadow-xl">Service</h1>
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
                <Link href='/' className=''>
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/service' className=''>
                  Service</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href={`/admin/service/${id}`} className='font-semibold'>
                  View Service</Link>
              </li>
            </ul>
        </div>
      </section>
      {/* MAIN CONTENT */}
      <ServiceView id={id} />
      {/* FOOTER */}
      <Footer appInfo={appInfo} />
    </div>
  )
}
