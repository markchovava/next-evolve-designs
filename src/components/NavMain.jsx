"use client"
import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { baseURL } from "@/api/baseURL";




export default function NavMain({ servicesData, appInfoData, categoriesData }) {
    const [isProject, setIsProject] = useState(false)
    const [isService, setIsService] = useState(false)


  return (
    <section className='w-[100%] py-2 bg-[#403d36] text-white'>
        <div className='mx-auto w-[90%] flex items-center justify-between'>
            {/* Logo */}
            <div className="w-[15%] h-auto">
                <img src={baseURL + appInfoData.data?.image} className="object-fill" alt="" />
            </div>
            <div >
                <ul className="flex items-center justify-start gap-4 font-semibold tracking-wider">
                <li><Link href='/' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                    HOME</Link></li>
                <li><Link href='/about' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                    ABOUT US</Link></li>

                { categoriesData.data &&
                    <li className="relative" 
                        onClick={() => {
                            setIsProject(!isProject);
                            setIsService(false);
                        }} 
                        >
                        <span href='#'
                        className="cursor-pointer flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                        OUR PROJECTS <IoChevronDownSharp /></span>
                        {isProject && 
                        <AnimatePresence>
                            <motion.ul 
                            initial={{ opacity:1 }}
                            animate={{ opacity:1}}
                            exit={{ opacity:1 }}
                            transition={{ duration: 0.6, type:'spring' }}
                            className="top-[120%] left-[-0.7rem] w-[160%] border border-white bg-[#403d36] absolute z-20">
                                {categoriesData?.data.map(item => (
                                    <li key={item.id} className="w-[100%] h-auto hover:bg-[#312f28] px-[0.7rem] py-2">
                                        <Link href={`/projects/${item.id}`} className=" w-[100%]">{item.name}</Link></li>
                                ))}

                               
                            </motion.ul>
                        </AnimatePresence>
                        }
                    </li>
                }
                {servicesData.data &&
                    <li className="relative" 
                        onClick={() => {
                            setIsService(!isService)
                            setIsProject(false);
                        }} 
                        >
                        <span href='#'
                        className="cursor-pointer flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                        OUR SERVICES <IoChevronDownSharp /></span>
                        {isService && 
                        <AnimatePresence>
                            <motion.ul 
                            initial={{ opacity:1 }}
                            animate={{ opacity:1}}
                            exit={{ opacity:1 }}
                            transition={{ duration: 0.6, type:'spring' }}
                            className="top-[120%] left-[-0.7rem] w-[160%] border border-white bg-[#403d36] absolute z-20">
        
                                {servicesData?.data.map(item => (
                                    <li key={item.id} className="w-[100%] h-auto px-[0.7rem] hover:bg-[#312f28] py-2">
                                    <Link href={`/service/${item.id}`} className=" w-[100%]">
                                        {item.name}</Link></li>
                                ))}

                            </motion.ul>
                        </AnimatePresence>
                        }
                    </li>
                }
                {/* <li><Link href='' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                    OUR BLOG</Link></li> */}
                <li><Link href='/contact' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                    CONTACT US</Link></li>
                </ul>
            </div>
            </div>
        </section>
  )
}
