"use client"

import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation} from 'swiper/modules';
import Link from 'next/link';
import { baseURL } from "@/api/baseURL";




export default async function Team({ users }) {
    const usersData = await JSON.parse(users.value)

  return (
    <section className='w-[100%] bg-slate-50  pt-[4rem] pb-[5rem]'>
        <div className="mx-auto w-[80%] flex items-center justify-center flex-col">
                <h1 className="leading-none pb-[1.5rem] text-center font-extrabold text-[5rem]">Our Team</h1>
                <hr className="border-t-4 border-slate-900 w-[20%] pb-[2rem]" />
        </div>
        <div className='mx-auto w-[80%]'>
            <div className="w-[100%] flex justify-center items-center">
                <Swiper
                    rewind={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    modules={[Pagination, Navigation]}
                    pagination={{clickable: true}}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={swiper => console.log(swiper)}
                    className='rounded-lg'>
                    {usersData.data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-[100%] h-[25rem] rounded-xl border overflow-hidden bg-white border-white drop-shadow-xl'>
                                <div className='w-[100%] h-[65%] bg-slate-600'>
                                    <img src={baseURL + item.image} className="w-[100%] h-[100%]" />
                                </div>
                                <div className='w-[100%] h-[65%] p-[1rem]'>
                                    <h4 className='text-black font-bold text-xl leading-none pb-1'>{item.name}</h4>
                                    <p className='italic pb-2'>{item.profession}</p>
                                    <p>{item.bio.slice(0,30)}</p>
                                    <ul className='flex items-center justify-start gap-3 text-2xl text-slate-700'>
                                       {/*  <li><Link href='#' ><FaFacebook className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                                        <li><Link href='#'><FaSquareXTwitter className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                                        <li><Link href='#'><FaInstagramSquare className="hover:scale-110 transition-all ease-in-out" /></Link></li> */}
                                        <li><Link href='#'><FaWhatsappSquare className="hover:scale-110 transition-all ease-in-out" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                    
                </Swiper>
            </div>
        
        </div>
    </section>
  )
}

