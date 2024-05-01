import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SingleProductList from './componets/common/SingleProductList';

const Testing = () => {
  return (
    <>
    <div className=''>

   
        <Swiper
        // slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '900': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1100': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
        <SwiperSlide><SingleProductList/></SwiperSlide>
      </Swiper>
      </div>
    </>
  )
}

export default Testing