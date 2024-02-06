"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser } from "react-icons/fa";
import AxiosClient from '@/api/axiosClient';
import { tokenAuth } from '@/api/tokenAuth';
import { tokenRole } from '@/api/tokenRole';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from "react-icons/gr";



export default function NavAdmin() {
    const router = useRouter();
    const { getAuthToken, removeAuthToken } = tokenAuth();
    const { removeRole, getRole } = tokenRole()
    const [isLogout, setIsLogout] = useState(false)
    const [isSetting, setIsSetting] = useState(false)
    const [isProject, setIsProject] = useState(false)
    const [isService, setIsService] = useState(false)
    const [isProfile, setIsProfile] = useState(false)
    const [isCategory, setIsCategory] = useState(false)
    const [isType, setIsType] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${getAuthToken()}`
      }}

    /* LOGOUT */
    async function postLogout() {
        setIsLogout(false) 
        console.log(getAuthToken());
        try{
        const result = await AxiosClient.get(`logout/`, config)
            .then((response) => {
                removeAuthToken();
                removeRole();
                router.push(`/login`) 
            
            })
        } catch (error) {
            console.error(`Error: ${error}`)
        } 
    } 

    useEffect(() => { 
        isLogout == true && postLogout();
    }, [isLogout]);

  return (
    <>
        <section className='lg:w-[100%] lg:block hidden bg-slate-800 text-white text-sm'>
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
                                        { getRole() <= 2 &&
                                            <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                                <Link href='/admin/role' className=" w-[100%] h-[100%]">Roles</Link>
                                            </li>
                                        }
                                    </motion.ul>
                                </AnimatePresence> 
                            }
                        </li>

                        {/* USERS */}
                        { getRole() == 1 &&
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
                        }
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
                                            <button onClick={() => setIsLogout(true)} 
                                                className="text-left w-[100%]">
                                                    Logout
                                            </button>
                                        </li>
                                        { !getAuthToken() &&
                                            <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                                <Link href='/login' className=" w-[100%]">Login</Link></li>
                                        }
                                    </motion.ul>
                                </AnimatePresence> 
                                }            
                    </div>  
                </div>
            </div>
        </section>
        {/* RESPONSIVE */}
        <section className='w-[100%] lg:hidden bg-slate-800 text-white text-sm'>
            <div className='mx-auto w-[100%] py-2 flex flex-col gap-6 items-center justify-between '>
                    <div className="mx-auto w-[90%] pb-2 flex items-center justify-end">
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
                {isOpen && 
                <>
                    <div className="w-[100%]">
                        <ul className="flex flex-col w-[100%] items-center justify-start gap-4">
                            {/* SETTINGS */}
                            <li className="relative w-[100%]" 
                                onClick={() => {
                                    setIsSetting(!isSetting);
                                    setIsType(false);
                                    setIsCategory(false);
                                    setIsService(false);
                                    setIsProject(false);
                                    setIsProfile(false);
                                    setIsUser(false);
                                }} >
                                <span href='#' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
                                    Settings <IoChevronDownSharp /></span>
                                {isSetting && 
                                    <AnimatePresence>
                                        <motion.ul 
                                            initial={{ opacity:1 }}
                                            animate={{ opacity:1 }}
                                            exit={{ opacity:1 }}
                                            transition={{ duration: 0.6, type:'spring' }}
                                            className="top-[130%] w-[100%] flex items-center justify-center bg-slate-900">
                                            <li className=" w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/app-info' className="flex items-center justify-center py-2 w-[100%]">AppInfo</Link>
                                            </li>
                                            { getRole() <= 2 &&
                                                <li className="px-[0.5rem] py-1 hover:bg-slate-950">
                                                    <Link href='/admin/role' className=" w-[100%] h-[100%]">Roles</Link>
                                                </li>
                                            }
                                        </motion.ul>
                                    </AnimatePresence> 
                                }
                            </li>

                            {/* USERS */}
                            { getRole() == 1 &&
                                <li className="relative w-[100%]"
                                    onClick={() => {
                                        setIsProfile(false);
                                        setIsCategory(false);
                                        setIsService(false);
                                        setIsSetting(false);
                                        setIsProject(false);
                                        setIsUser(!isUser);
                                    }} >
                                    <span href='' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
                                        Users <IoChevronDownSharp /></span>
                                        {isUser && 
                                            <AnimatePresence>
                                                <motion.ul 
                                                    initial={{ opacity:1 }}
                                                    animate={{ opacity:1 }}
                                                    exit={{ opacity:1 }}
                                                    transition={{ duration: 0.6, type:'spring' }}
                                                    className="top-[130%] w-[100%] flex items-center justify-center bg-slate-900">
                                                    <li className=" w-[100%] hover:bg-slate-950">
                                                        <Link href='/admin/user/add' className=" w-[100%]">Add User</Link></li>
                                                    <li className="px-[0.5rem] py-1 hover:bg-slate-900">
                                                        <Link href='/admin/user' className=" w-[100%]">Users List</Link></li>
                                                </motion.ul>
                                            </AnimatePresence> 
                                        }    
                                </li>
                            }
                            {/* CATEGORY */}
                            <li className="relative w-[100%]" 
                                onClick={() => {
                                    setIsCategory(!isCategory);
                                    setIsType(false);
                                    setIsProject(false);
                                    setIsSetting(false);
                                    setIsService(false);
                                    setIsProfile(false);
                                    setIsUser(false);
                                }}>
                                <span href='' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
                                    Categories <IoChevronDownSharp /></span>
                                {isCategory && 
                                    <AnimatePresence>
                                        <motion.ul 
                                            initial={{ opacity:1 }}
                                            animate={{ opacity:1 }}
                                            exit={{ opacity:1 }}
                                            transition={{ duration: 0.6, type:'spring' }}
                                            className="top-[130%] w-[100%] flex flex-col items-center justify-center bg-slate-900">
                                            <li className=" w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/category/add' className="flex items-center justify-center py-2 w-[100%]">Add Category</Link></li>
                                            <li className=" w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/category' className="flex items-center justify-center py-2 w-[100%]">
                                                    Category List
                                                    </Link>
                                                </li>
                                        </motion.ul>
                                    </AnimatePresence> 
                                }    
                            </li>
                           
                            {/* PROJECTS */}
                            <li className="relative w-[100%]" 
                                onClick={() => {
                                    setIsProject(!isProject);
                                    setIsType(false);
                                    setIsCategory(false);
                                    setIsSetting(false);
                                    setIsService(false);
                                    setIsProfile(false);
                                    setIsUser(false);
                                }}>
                                <span href='' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
                                    Projects <IoChevronDownSharp /></span>
                                {isProject && 
                                    <AnimatePresence>
                                        <motion.ul 
                                            initial={{ opacity:1 }}
                                            animate={{ opacity:1 }}
                                            exit={{ opacity:1 }}
                                            transition={{ duration: 0.6, type:'spring' }}
                                            className="top-[130%] w-[100%] flex flex-col items-center justify-center bg-slate-900">
                                            <li className=" w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/project/add' className="flex items-center justify-center py-2 w-[100%]">
                                                    Add Project</Link></li>
                                            <li className="w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/project' className="flex items-center justify-center py-2 w-[100%]">Projects List</Link></li>
                                        </motion.ul>
                                    </AnimatePresence> 
                                }    
                            </li>
                            {/* SERVICES */}
                            <li className="relative w-[100%]"
                                onClick={() => {
                                    setIsService(!isService);
                                    setIsType(false);
                                    setIsCategory(false);
                                    setIsSetting(false);
                                    setIsProject(false);
                                    setIsProfile(false);
                                    setIsUser(false);
                                }} >
                                <span href='' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
                                    Services <IoChevronDownSharp /></span>
                                    {isService && 
                                    <AnimatePresence>
                                        <motion.ul 
                                            initial={{ opacity:1 }}
                                            animate={{ opacity:1 }}
                                            exit={{ opacity:1 }}
                                            transition={{ duration: 0.6, type:'spring' }}
                                            className="top-[130%] w-[100%] flex flex-col items-center justify-center bg-slate-900">
                                            <li className="w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/service/add' className="flex items-center justify-center py-2 w-[100%]">
                                                    Add Service</Link></li>
                                            <li className="w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/service' className="flex items-center justify-center py-2 w-[100%]">Service List</Link></li>
                                        </motion.ul>
                                    </AnimatePresence> 
                                    }    
                            </li>
                            
                        </ul>
                    </div>
                    <div className=" w-[100%] flex items-center justify-center pb-4">
                        <div className="relative w-[100%]"
                                onClick={() => {
                                    setIsProfile(!isProfile);
                                    setIsCategory(false);
                                    setIsService(false);
                                    setIsSetting(false);
                                    setIsProject(false);
                                    setIsUser(false);
                                }} >
                                <span href='' className="w-[100%] flex items-center justify-center py-2 gap-1 cursor-pointer hover:text-slate-100">
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
                                            className="top-[130%] w-[100%] flex flex-col items-center justify-center bg-slate-900">
                                            <li className="w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/profile' className="flex items-center justify-center py-2 w-[100%]">View Profile</Link></li>
                                            <li className="w-[100%] hover:bg-slate-950">
                                                <Link href='/admin/profile/edit' className="flex items-center justify-center py-2 w-[100%]">Edit Profile</Link></li>
                                            <li className="w-[100%] hover:bg-slate-950 py-2">
                                                <Link href='/admin/profile/password' className="flex items-center justify-center w-[100%]">Set Password</Link></li>
                                            <li className="w-[100%] hover:bg-slate-950 py-2">
                                                <button onClick={() => setIsLogout(true)} 
                                                    className="flex items-center justify-center w-[100%]">
                                                        Logout
                                                </button>
                                            </li>
                                            { !getAuthToken() &&
                                                <li className="w-[100%] hover:bg-slate-950">
                                                    <Link href='/login' className="flex items-center justify-center py-2 w-[100%]">Login</Link></li>
                                            }
                                        </motion.ul>
                                    </AnimatePresence> 
                                    }            
                        </div>  
                    </div>
                </>
                }
            </div>
        </section>
    </>
  )
}
