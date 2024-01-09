"use client"
import Link from 'next/link';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function MainSlider() {
    return (
        <div className='w-[100%] bg-slate-50 text-black'> 
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation
            effect
            pagination={{
              clickable: true,
            }}
            speed={2000}
            loop={true}
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            className='z-[-100]'
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            <SwiperSlide>
              <div 
                style={{ backgroundImage: `url('/assets/img/slides/01.jpg')`}}
                className='w-full h-[36rem] bg-no-repeat bg-cover flex flex-col items-center justify-center'>  
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div 
                style={{ backgroundImage: `url('/assets/img/slides/02.jpg')`}}
                className='w-full h-[36rem] bg-cover bg-gradient-to-br from-pink-200 to-slate-500'>
           
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div 
                style={{ backgroundImage: `url('/assets/img/slides/03.jpg')`}}
                className='w-full h-[36rem] bg-cover bg-gradient-to-br from-pink-200 to-slate-500'>
           
              </div>
            </SwiperSlide>
           
          </Swiper>
    
        </div>
      )
}
