"use client"
import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { baseURL } from "@/api/baseURL";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from "react-icons/gr";



export default function NavMain({ servicesData, appInfoData, categoriesData }) {
    const [isProject, setIsProject] = useState(false);
    const [isService, setIsService] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


  return (
    <>
        <section className='lg:w-[100%] hidden lg:block py-2 bg-[#403d36] text-white'>
            <div className='mx-auto w-[90%] flex items-center justify-between'>
                {/* Logo */}
                <div className="w-[15%] h-auto">
                    <img src={baseURL + appInfoData?.image} className="object-fill" alt="logo" />
                </div>
                <div >
                    <ul className="flex items-center justify-start gap-4 font-semibold tracking-wider">
                    <li><Link href='/' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                        HOME</Link></li>
                    <li><Link href='/about' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                        ABOUT US</Link></li>

                    { categoriesData?.length > 0 &&
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
                                    {categoriesData?.map(item => (
                                        <li key={item.id} className="w-[100%] h-auto hover:bg-[#312f28] px-[0.7rem] py-2">
                                            <Link href={`/projects/${item.id}`} className=" w-[100%]">{item.name}</Link></li>
                                    ))}

                                
                                </motion.ul>
                            </AnimatePresence>
                            }
                        </li>
                    }
                    {servicesData?.length &&
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
            
                                    {servicesData?.map(item => (
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
        <section className='lg:hidden w-[100%] py-2 bg-[#403d36] text-white'>
            <div className='mx-auto w-[100%] flex flex-col items-center justify-between'>
                {/* Logo */}
                <div className="w-[50%] h-auto">
                    <img src={baseURL + appInfoData?.image} className="object-fill" alt="" />
                </div>
                {/* HAMBURGER */}
                <div className="mx-auto w-[90%] py-2 flex items-center justify-end">
                        { isOpen === false ?
                            <GiHamburgerMenu
                                onClick={() => setIsOpen(true)} 
                                className='text-white text-xl' />
                            :
                            <GrClose 
                                onClick={() => setIsOpen(false)} 
                                className='text-white text-xl' />
                        }
                    </div>

                { isOpen &&
                    <div className="pt-4 w-[100%]" >
                        <ul className="w-[100%] flex flex-col items-center justify-start gap-4 font-semibold tracking-wider">
                            <li className="relative w-[100%]"><Link href='/' className="w-[100%] flex items-center justify-center gap-1 hover:bg-[#312f28] hover:text-slate-100 py-3 transition-all ease-in duration-100">
                                HOME</Link></li>
                            <li className="relative w-[100%]"><Link href='/about' className="w-[100%] flex items-center justify-center gap-1 hover:bg-[#312f28] hover:text-slate-100 py-3 transition-all ease-in duration-100">
                                ABOUT US</Link></li>

                            { categoriesData?.length > 0 &&
                                <li className="relative w-[100%]" 
                                    onClick={() => {
                                        setIsProject(!isProject);
                                        setIsService(false);
                                    }} 
                                    >
                                    <span href='#'
                                        className="w-[100%] cursor-pointer flex items-center justify-center gap-1 hover:bg-[#312f28] hover:text-slate-100 py-3 transition-all ease-in duration-100">
                                        OUR PROJECTS <IoChevronDownSharp /></span>
                                    {isProject && 
                                    <AnimatePresence>
                                        <motion.ul 
                                        initial={{ opacity:1 }}
                                        animate={{ opacity:1}}
                                        exit={{ opacity:1 }}
                                        transition={{ duration: 0.6, type:'spring' }}
                                        className="top-[120%] w-[100%] bg-[#403d36]">
                                            {categoriesData?.map(item => (
                                                <li key={item.id} className="w-[100%] h-auto bg-[#312f28] hover:bg-[#312f28] px-[0.7rem] py-2">
                                                    <Link href={`/projects/${item.id}`} className="w-[100%] flex items-center justify-center">
                                                        {item.name}</Link></li>
                                            ))}

                                        
                                        </motion.ul>
                                    </AnimatePresence>
                                    }
                                </li>
                            }
                        {servicesData?.length > 0 &&
                            <li className="relative w-[100%]" 
                                onClick={() => {
                                    setIsService(!isService)
                                    setIsProject(false);
                                }} 
                                >
                                <span href='#'
                                className="w-[100%] cursor-pointer hover:bg-[#312f28] flex items-center justify-center gap-1 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                                OUR SERVICES <IoChevronDownSharp /></span>
                                {isService && 
                                <AnimatePresence>
                                    <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1}}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[120%] w-[100%] bg-[#403d36]">
                
                                        {servicesData?.map(item => (
                                            <li key={item.id} className="w-[100%] h-auto bg-[#312f28] hover:bg-[#312f28] px-[0.7rem] py-2">
                                            <Link href={`/service/${item.id}`} className="w-[100%] flex items-center justify-center">
                                                {item.name}</Link></li>
                                        ))}

                                    </motion.ul>
                                </AnimatePresence>
                                }
                            </li>
                        }
                        {/* <li><Link href='' className="flex items-center justify-center gap-1 hover:border-b border-slate-300 hover:text-slate-100 py-3 transition-all ease-in duration-100">
                            OUR BLOG</Link></li> */}
                        <li className="relative w-[100%]"><Link href='/contact' className="hover:bg-[#312f28] flex items-center justify-center gap-1  hover:text-slate-100 py-3 transition-all ease-in duration-100">
                            CONTACT US</Link></li>
                        </ul>
                    </div>
                }
                </div>
        </section>
    </>
  )
}
