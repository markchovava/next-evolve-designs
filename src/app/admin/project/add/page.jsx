import Link from 'next/link'
import { BsChevronRight } from "react-icons/bs";
import getAppInfo from '@/api/getAppInfo';
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import ProjectAdd from './components/ProjectAdd';


export default function page() {
    const appInfo = getAppInfo()
  
  return (
    <div>
      <Header appInfo={appInfo} />
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
                <Link href='/' className='font-semibold'>
                  Admin</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/project' className='font-semibold'>
                  Project</Link>
              </li>
              <li><BsChevronRight /></li>
              <li className='flex justify-start items-center'>
                <Link href='/admin/project/add' className='font-semibold'>
                  Add Project</Link>
              </li>
            </ul>
        </div>
      </section>
      {/* MAIN CONTENT */}
      <ProjectAdd />
      {/* FOOTER */}
      <Footer appInfo={appInfo} />
    </div>
  )
}
