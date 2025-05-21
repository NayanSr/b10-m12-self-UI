import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'



const Category = () => {
    return (
        <div className='my-4'>
             <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Salad</h4></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Soupe</h4></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Deseart</h4></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Birani</h4></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Panta</h4></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Salad</h4></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Soupe</h4></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Deseart</h4></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Birani</h4></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Panta</h4></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Salad</h4></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Soupe</h4></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Deseart</h4></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Birani</h4></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /><h4 className='text-white bg-black text-3xl text-center'>Panta</h4></SwiperSlide>
        
       
      </Swiper> 
        </div>
    );
};

export default Category; 

