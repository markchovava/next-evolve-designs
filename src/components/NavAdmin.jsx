"use client"
import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser } from "react-icons/fa";


export default function NavAdmin() {
    const [isSetting, setIsSetting] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isService, setIsService] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isCategory, setIsCategory] = useState(false)
    const [isType, setIsType] = useState(false)
    const [isUser, setIsUser] = useState(false)

  return (
    <section className='w-[100%] bg-slate-800 text-white text-sm'>
        <div className='mx-auto w-[90%] py-2 flex items-center justify-between '>
            <div className="w-[60%]">
                <ul className="flex items-center justify-start gap-4">
                    {/* SETTINGS */}
                    <li className="relative" 
                        onClick={() => {
                            setIsSetting(!isSetting);
                            setIsType(false);
                            setIsCategory(false);
                            setIsService(false);
                            setIsProject(false);
                            setIsProfile(false);
                            setIsUser(false);
                        }} >
                        <span href='#' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Settings <IoChevronDownSharp /></span>
                        {isSetting && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] left-[-0.5rem] w-[160%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/app-info' className=" w-[100%]">AppInfo</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/permission' className=" w-[100%]">Permissions</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/role' className=" w-[100%] h-[100%]">Roles</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                        }
                    </li>
                    {/* USERS */}
                    <li className="relative"
                        onClick={() => {
                            setIsProfile(false);
                            setIsCategory(false);
                            setIsService(false);
                            setIsSetting(false);
                            setIsProject(false);
                            setIsUser(!isUser);
                        }} >
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Users <IoChevronDownSharp /></span>
                            {isUser && 
                                <AnimatePresence>
                                    <motion.ul 
                                        initial={{ opacity:1 }}
                                        animate={{ opacity:1 }}
                                        exit={{ opacity:1 }}
                                        transition={{ duration: 0.6, type:'spring' }}
                                        className="top-[125%] left-[-0.5rem] w-[220%] border border-white bg-slate-800 absolute z-10 pb-2">
                                        <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                            <Link href='/admin/user/add' className=" w-[100%]">Add User</Link></li>
                                        <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                            <Link href='/admin/user' className=" w-[100%]">Users List</Link></li>
                                    </motion.ul>
                                </AnimatePresence> 
                            }    
                    </li>
                    {/* CATEGORY */}
                    <li className="relative" 
                        onClick={() => {
                            setIsCategory(!isCategory);
                            setIsType(false);
                            setIsProject(false);
                            setIsSetting(false);
                            setIsService(false);
                            setIsProfile(false);
                            setIsUser(false);
                        }}>
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Categories <IoChevronDownSharp /></span>
                        {isCategory && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] left-[-0.5rem] w-[160%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/category/add' className=" w-[100%]">Add Category</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/category' className=" w-[100%]">Category List</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                        }    
                    </li>
                    {/* TYPE */}
                    <li className="relative" 
                        onClick={() => {
                            setIsType(!isType);
                            setIsCategory(false);
                            setIsProject(false);
                            setIsSetting(false);
                            setIsService(false);
                            setIsProfile(false);
                            setIsUser(false);
                        }}>
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Types <IoChevronDownSharp /></span>
                        {isType && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] left-[-0.5rem] w-[160%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/type/add' className=" w-[100%]">
                                            Add Type</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/type' className=" w-[100%]">
                                            Type List</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                        }    
                    </li>
                    {/* PROJECTS */}
                    <li className="relative" 
                        onClick={() => {
                            setIsProject(!isProject);
                            setIsType(false);
                            setIsCategory(false);
                            setIsSetting(false);
                            setIsService(false);
                            setIsProfile(false);
                            setIsUser(false);
                        }}>
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Projects <IoChevronDownSharp /></span>
                        {isProject && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] left-[-0.5rem] w-[160%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/project/add' className=" w-[100%]">Add Project</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/project' className=" w-[100%]">Projects List</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                        }    
                    </li>
                    {/* SERVICES */}
                    <li className="relative"
                        onClick={() => {
                            setIsService(!isService);
                            setIsType(false);
                            setIsCategory(false);
                            setIsSetting(false);
                            setIsProject(false);
                            setIsProfile(false);
                            setIsUser(false);
                        }} >
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            Services <IoChevronDownSharp /></span>
                            {isService && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] left-[-0.5rem] w-[160%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/service/add' className=" w-[100%]">Add Service</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/service' className=" w-[100%]">Service List</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                            }    
                    </li>
                     
                </ul>
            </div>
            <div className="flex items-center justify-end">
                <div className="relative"
                        onClick={() => {
                            setIsProfile(!isProfile);
                            setIsCategory(false);
                            setIsService(false);
                            setIsSetting(false);
                            setIsProject(false);
                            setIsUser(false);
                        }} >
                        <span href='' className="cursor-pointer flex items-center justify-start gap-1 hover:text-slate-100">
                            <FaUser />
                            Profile 
                            <IoChevronDownSharp /></span>
                            {isProfile && 
                            <AnimatePresence>
                                <motion.ul 
                                    initial={{ opacity:1 }}
                                    animate={{ opacity:1 }}
                                    exit={{ opacity:1 }}
                                    transition={{ duration: 0.6, type:'spring' }}
                                    className="top-[125%] right-[-0.5rem] w-[180%] border border-white bg-slate-800 absolute z-10 pb-2">
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/profile' className=" w-[100%]">View Profile</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/profile/edit' className=" w-[100%]">Edit Profile</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/admin/profile/password' className=" w-[100%]">Set Password</Link></li>
                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                        <Link href='/login' className=" w-[100%]">Login</Link></li>
                                </motion.ul>
                            </AnimatePresence> 
                            }            
                </div>  
            </div>
        </div>
    </section>
  )
}
